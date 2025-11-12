"use client";

import { motion } from "motion/react";

const HeroSection = () => {
  // テキストを文字ごとに分割
  const text = "ファッションを学び、「個性」「自己表現」をもっと楽しむための空間。";
  const characters = text.split("");

  return (
    <section className="h-full select-none overflow-hidden">
      <div className="h-full grid place-items-center relative">
        {/* テキスト - 中心から左右にゆっくり広がって表示 */}
        <motion.p
          className="text-xs relative z-10"
          initial={{ letterSpacing: "-0.5em" }}
          animate={{ letterSpacing: "normal" }}
          transition={{
            duration: 1.5,
            delay: 0,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          {characters.map((char, index) => {
            // 中心からの距離を計算
            const totalChars = characters.length;
            const centerIndex = totalChars / 2;
            const distanceFromCenter = Math.abs(index - centerIndex);
            const normalizedDistance = distanceFromCenter / centerIndex;

            // 遅延を中心から外側に向かって設定
            const delay = normalizedDistance * 0.5;

            return (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  filter: "blur(6px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.8,
                  delay: delay,
                  ease: [0.4, 0, 0.2, 1],
                }}
                style={{
                  display: "inline-block",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;