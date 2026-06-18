import { motion } from "framer-motion";
import type { Member } from "@/data/members";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-[min(86vw,360px)] shrink-0 snap-center overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft transition-shadow hover:shadow-lift sm:w-[360px] md:w-[400px]"
    >
      <div className="aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={member.photo}
          alt={member.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-display text-xl font-bold leading-tight text-slate-warm sm:text-2xl">
          {member.name}{" "}
          <span className="font-semibold text-muted-foreground">
            / {member.nickname}
          </span>
        </h3>
        <p className="mt-2 text-sm font-extrabold tracking-wider text-teal">
          {member.tagline}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-[15px]">
          {member.lore}
        </p>
      </div>
    </motion.article>
  );
}
