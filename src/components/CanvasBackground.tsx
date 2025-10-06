import React, { useEffect, useRef } from "react";

// Define the structure for each golden ratio pattern
interface Pattern {
    centerX: number; // X position of pattern center
    centerY: number; // Y position of pattern center
    rotation: number; // Base rotation of the pattern
    scale: number; // Size multiplier for the pattern
    points: Point[]; // Array of points that make up the pattern
}

// Define the structure for each point in a pattern
interface Point {
    x: number; // Current X position
    y: number; // Current Y position (before animation)
    originalX: number; // Original X position (before animation)
    originalY: number; // Original Y position (before animation)
    angle: number; // Angle from center (golden ratio based)
    distance: number; // Distance from pattern center
    size: number; // Size of this individual point
    phase: number; // Animation phase offset
}

const CanvasBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Core configuration values
        const patterns: Pattern[] = [];
        const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5)); // ≈ 137.5° - The golden angle in radians
        const POINTS_PER_PATTERN = 200; // More points = denser patterns, but lower performance
        const SCALE_FACTOR = 2; // Controls overall size of patterns (higher = bigger patterns)
        const MIN_DISTANCE = 400; // Minimum spacing between patterns (lower = patterns can be closer)
        const PLACEMENT_ATTEMPTS = 100; // How hard it tries to place each pattern (higher = better distribution)
        const ROTATION_SPEED = 0.00003; // How fast each pattern rotates

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Creates a single golden ratio pattern
        const createPattern = (
            centerX: number,
            centerY: number,
            rotation: number,
            scale: number
        ): Pattern => {
            const points: Point[] = [];

            for (let i = 0; i < POINTS_PER_PATTERN; i++) {
                const angle = i * GOLDEN_ANGLE + rotation;
                const distance =
                    Math.pow(i / POINTS_PER_PATTERN, 0.5) *
                    (SCALE_FACTOR * 50) *
                    scale;
                const x = centerX + Math.cos(angle) * distance;
                const y = centerY + Math.sin(angle) * distance;

                points.push({
                    x,
                    y,
                    originalX: x,
                    originalY: y,
                    angle,
                    distance,
                    size: 0.5 + (distance / (SCALE_FACTOR * 50)) * 2 * scale,
                    phase: angle,
                });
            }

            return { centerX, centerY, rotation, scale, points };
        };

        // Checks if a new pattern can be placed at (x,y) without overlapping
        const isValidPosition = (x: number, y: number): boolean => {
            return !patterns.some((pattern) => {
                const dx = pattern.centerX - x;
                const dy = pattern.centerY - y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                return distance < MIN_DISTANCE;
            });
        };

        // Creates all patterns across the canvas
        const createPatterns = () => {
            patterns.length = 0;
            // Calculate how many patterns can fit based on canvas size
            const patternCount = Math.ceil(
                ((canvas.width * canvas.height) /
                    (MIN_DISTANCE * MIN_DISTANCE)) *
                    0.75
            );

            // Try to place patterns in a 3x3 grid formation for even distribution
            for (let i = 0; i < patternCount; i++) {
                let placed = false;
                for (
                    let attempt = 0;
                    attempt < PLACEMENT_ATTEMPTS && !placed;
                    attempt++
                ) {
                    // Divide canvas into 9 sections (3x3)
                    const section = i % 9;
                    const sectionX = section % 3;
                    const sectionY = Math.floor(section / 3);

                    // Calculate position within section
                    const x =
                        (sectionX * canvas.width) / 3 +
                        Math.random() * (canvas.width / 3);
                    const y =
                        (sectionY * canvas.height) / 3 +
                        Math.random() * (canvas.height / 3);

                    if (isValidPosition(x, y)) {
                        patterns.push(
                            createPattern(
                                x,
                                y,
                                Math.random() * Math.PI,
                                0.8 + Math.random() * 0.8
                            )
                        );
                        placed = true;
                    }
                }
            }
        };

        // Draws and animates all patterns
        const drawPatterns = (time: number) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            patterns.forEach((pattern) => {
                const rotation = time * ROTATION_SPEED;

                // Draw only the points
                pattern.points.forEach((point) => {
                    const rotatedAngle = point.angle + rotation;
                    const x =
                        pattern.centerX +
                        Math.cos(rotatedAngle) * point.distance;
                    const y =
                        pattern.centerY +
                        Math.sin(rotatedAngle) * point.distance;

                    ctx.beginPath();
                    ctx.arc(x, y, point.size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 198, 99, ${
                        0.15 + (point.distance / (SCALE_FACTOR * 50)) * 0.1
                    })`;
                    ctx.fill();
                });
            });
        };

        // Animation loop
        const animate = (time: number) => {
            drawPatterns(time);
            requestAnimationFrame(animate);
        };

        // Initialize
        resizeCanvas();
        createPatterns();
        requestAnimationFrame(animate);

        // Cleanup and resize handling
        window.addEventListener("resize", () => {
            resizeCanvas();
            createPatterns();
        });

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas role="presentation"
            ref={canvasRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
                background:
                    "linear-gradient(45deg, rgb(45, 149, 193), rgb(50, 50, 175))",
            }}
        />
    );
};

export default CanvasBackground;