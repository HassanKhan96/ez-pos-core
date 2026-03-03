# AGENTS.md

## Purpose
Persistent context for future coding threads in this repository.

## Product Direction
- Build and maintain a single POS core platform for multiple verticals:
  - Restaurant
  - Mart
  - Pharmacy

## Recommended Architecture
1. Keep one core platform/codebase.
2. Add vertical packs behind feature flags/capabilities.
3. Implement restaurant first as an extension pack, not a forked codebase.

## Why This Approach
1. Protects shared core reuse.
2. Allows deep restaurant workflows without polluting mart/pharmacy.
3. Reduces maintenance and release overhead versus multiple codebases.

## Restaurant Pack MVP Scope
1. Order channels:
   - `DINE_IN`
   - `TAKEOUT`
   - `DELIVERY`
   - `COLLECTION`
2. Dine-in operations:
   - table/zone management
   - assign/move/merge orders
3. Kitchen management:
   - KOT tickets
   - station routing
   - ticket lifecycle: `NEW -> PREPARING -> READY -> SERVED`

## Implementation Blueprint
1. Add profile + capabilities layer.
2. Extend order flow with profile-aware validation.
3. Add restaurant extension tables (do not replace core order tables).
4. Add dedicated service and IPC namespaces:
   - `restaurant:*`
   - `kitchen:*`
5. Render restaurant UI screens only when profile is restaurant.
6. Route kitchen printing separately from customer receipt printing.

## Delivery Phases
1. Phase 1 (Foundation): business profile, capabilities, channels in checkout.
2. Phase 2 (Dine-In): tables/zones, assign and move orders.
3. Phase 3 (Kitchen): KOT generation, kitchen board, station status.
4. Phase 4 (Ops): split bills, void reasons, audit trail, performance tuning.

## Decision Options
1. Option A (Recommended): single codebase + restaurant pack now.
2. Option B: channels only now, postpone table/kitchen.
3. Option C: separate restaurant codebase (highest cost; not preferred now).

