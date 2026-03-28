"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Brain,
  ShieldAlert,
  CheckCircle,
  Target,
  FileSearch,
  Gauge,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FEATURES, HOW_IT_WORKS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  ShieldAlert,
  CheckCircle,
  Target,
  FileSearch,
  Gauge,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a14] overflow-hidden">
      {/* ── Navbar ── */}
      <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,20,0.8)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00e5ff] to-[#a855f7] flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#0a0a14]" />
            </div>
            <span className="text-lg font-bold" style={{ fontFamily: "Outfit, sans-serif" }}>
              <span className="text-[#00e5ff]">Shadow</span>
              <span className="text-[#f0f0ff]">Hire</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button variant="primary" size="sm" icon={<Sparkles className="w-3.5 h-3.5" />}>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Background Effects ── */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="orb orb-cyan w-[500px] h-[500px] -top-32 -left-32" />
        <div className="orb orb-purple w-[600px] h-[600px] top-1/3 -right-48" style={{ animationDelay: "-7s" }} />
        <div className="orb orb-pink w-[400px] h-[400px] bottom-0 left-1/3" style={{ animationDelay: "-14s" }} />
        <div className="grid-bg absolute inset-0" />
      </div>

      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.2)] text-[#00e5ff] text-xs font-medium mb-8"
            >
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered Skill Verification Platform
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6" style={{ fontFamily: "Outfit, sans-serif" }}>
              Unmask{" "}
              <span className="gradient-text">Fake Experience</span>
              <br />
              Before It Costs You
            </h1>

            <p className="text-lg md:text-xl text-[#8888aa] max-w-2xl mx-auto mb-10 leading-relaxed">
              ShadowHire uses multi-agent AI to conduct deep technical interviews, detect
              bluffed experience, and deliver authenticity scores — so you never hire another fake expert.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup">
                <Button variant="primary" size="lg" glow icon={<ArrowRight className="w-4 h-4" />}>
                  Start Verifying Candidates
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="secondary" size="lg" icon={<ChevronRight className="w-4 h-4" />}>
                  View Demo Dashboard
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Visual - Mock Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 relative"
          >
            <div className="glass-card p-1 rounded-2xl mx-auto max-w-4xl">
              <div className="bg-[rgba(10,10,20,0.9)] rounded-xl p-6 border border-[rgba(255,255,255,0.04)]">
                {/* Mock dashboard stat cards */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Interviews", value: "247", trend: "+12%", color: "#00e5ff" },
                    { label: "Bluffs Caught", value: "89", trend: "+23%", color: "#ef4444" },
                    { label: "Avg Score", value: "64", trend: "-3%", color: "#f59e0b" },
                    { label: "Verified", value: "158", trend: "+8%", color: "#10b981" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-[rgba(255,255,255,0.03)] rounded-lg p-3 border border-[rgba(255,255,255,0.04)]"
                    >
                      <p className="text-[10px] text-[#555577] uppercase tracking-wider">{stat.label}</p>
                      <div className="flex items-end gap-2 mt-1">
                        <span className="text-2xl font-bold" style={{ color: stat.color, fontFamily: "Outfit" }}>
                          {stat.value}
                        </span>
                        <span className="text-[10px] text-[#10b981] mb-1">{stat.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mock interview rows */}
                <div className="space-y-2">
                  {[
                    { name: "Alex Chen", skill: "React", score: 72, status: "review" },
                    { name: "Sarah Miller", skill: "Python", score: 85, status: "verified" },
                    { name: "Marcus Johnson", skill: "ML", score: 34, status: "flagged" },
                  ].map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center justify-between px-4 py-3 bg-[rgba(255,255,255,0.02)] rounded-lg border border-[rgba(255,255,255,0.03)]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#a855f7] to-[#ec4899] flex items-center justify-center text-[10px] text-white font-bold">
                          {row.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-xs text-[#f0f0ff] font-medium">{row.name}</p>
                          <p className="text-[10px] text-[#555577]">{row.skill} Specialist</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold" style={{
                          color: row.score >= 75 ? "#10b981" : row.score >= 50 ? "#f59e0b" : "#ef4444"
                        }}>
                          {row.score}%
                        </span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                          row.status === "verified"
                            ? "bg-[rgba(16,185,129,0.12)] text-[#10b981]"
                            : row.status === "flagged"
                            ? "bg-[rgba(239,68,68,0.12)] text-[#ef4444]"
                            : "bg-[rgba(245,158,11,0.12)] text-[#f59e0b]"
                        }`}>
                          {row.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Glow effect under preview */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-gradient-to-t from-transparent to-[rgba(0,229,255,0.05)] blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Outfit" }}>
              Powered by{" "}
              <span className="gradient-text">Multi-Agent AI</span>
            </h2>
            <p className="text-[#8888aa] max-w-xl mx-auto">
              Three specialized AI agents work together to probe, challenge, and evaluate every skill claim.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {FEATURES.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <motion.div key={feature.title} variants={itemVariants}>
                  <div className="glass-card p-6 h-full group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {Icon && <Icon className="w-6 h-6 text-white" />}
                    </div>
                    <h3 className="text-lg font-semibold text-[#f0f0ff] mb-2" style={{ fontFamily: "Outfit" }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#8888aa] leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Outfit" }}>
              Three Steps to{" "}
              <span className="gradient-text">Verified Hiring</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00e5ff] to-[#a855f7] flex items-center justify-center text-xl font-bold text-[#0a0a14]" style={{ fontFamily: "Outfit" }}>
                  {step.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-[#f0f0ff] mb-2" style={{ fontFamily: "Outfit" }}>
                    {step.title}
                  </h3>
                  <p className="text-[#8888aa] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,229,255,0.05)] to-[rgba(168,85,247,0.05)]" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Outfit" }}>
                  Stop Hiring <span className="gradient-text-danger">Fake Experts</span>
                </h2>
                <p className="text-[#8888aa] mb-8 max-w-lg mx-auto">
                  Join companies that trust ShadowHire to verify candidate skills before they become expensive mistakes.
                </p>
                <Link href="/signup">
                  <Button variant="primary" size="lg" glow icon={<ArrowRight className="w-4 h-4" />}>
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[rgba(255,255,255,0.06)] py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-xs text-[#555577]">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#00e5ff]" />
            <span>ShadowHire © 2026</span>
          </div>
          <p>AI-Powered Skill Verification</p>
        </div>
      </footer>
    </div>
  );
}
