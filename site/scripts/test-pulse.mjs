#!/usr/bin/env node
const base = process.env.PULSE_URL ?? "http://localhost:3000/api/maia/pulse";
const res = await fetch(base);
const json = await res.json();
console.log(JSON.stringify(json, null, 2));
