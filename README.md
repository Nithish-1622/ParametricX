# ParametriX  
### AI-Powered Parametric Insurance for Gig Workers  
**DEVTrails 2026 – Phase 1 Submission**

---

## 🚀 Live Deployment
[![Live Demo](https://img.shields.io/badge/Live-Demo-22C55E?style=for-the-badge&logo=vercel&logoColor=white)](https://parametric-x.vercel.app/)

https://parametric-x.vercel.app/

## Overview

ParametriX is a fully automated parametric insurance platform designed for gig economy delivery workers. It provides real-time compensation for income loss caused by environmental and operational disruptions such as:

- Heavy Rainfall  
- Extreme Heat  
- Air Pollution (AQI)  
- Infrastructure Failures  

Unlike traditional insurance, ParametriX eliminates manual claims and uses:

- Event-driven triggers  
- AI-based validation  

to process payouts instantly and securely.

---

## Problem Statement

Gig workers face immediate income disruption due to real-world conditions, but:

- Claims are manual and delayed  
- Verification is inefficient  
- Fraud detection is weak (GPS-only)  
- Payout cycles are too slow  

---

## Solution

ParametriX uses a parametric insurance model where:

- Payouts are triggered by objective external data instead of manual claims.

---

**Core Pipelines:**

	External Data → Trigger Engine → Event Creation → Worker Matching
	→ Fraud Detection → Claim Engine → Payout Engine → Dashboard

## System Design Philosophy

- Event-driven automation (zero manual claims)  
- Multi-signal verification (beyond GPS)  
- AI-assisted decision making  
- Stateless and scalable architecture  

---

## High-Level Architecture

```text
                ┌───────────────────────┐
                │    React Frontend     │
                │ (Worker + Admin UI)   │
                └──────────┬────────────┘
                           │
                           ▼
                ┌───────────────────────┐
                │  Spring Boot Backend  │
                │  (Core Orchestration) │
                └──────────┬────────────┘
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│ PostgreSQL   │   │ AI Services  │   │ External APIs│
│ (State DB)   │   │ (FastAPI ML) │   │ Weather/AQI  │
└──────────────┘   └──────────────┘   └──────────────┘
```

---

## Core System Pipeline


External Data
↓
Trigger Engine
↓
Disruption Events
↓
Worker Matching
↓
Fraud Detection
↓
Claim Engine
↓
Payout Engine
↓
Dashboard / Analytics


---

## Core Modules

### Trigger Engine

- Runs every 5 minutes (scheduler/cron)  
- Converts environmental data into structured events  

**Rules:**
- IF rainfall > threshold → HEAVY_RAIN  
- IF AQI > threshold → POLLUTION_ALERT  
- IF temperature > threshold → EXTREME_HEAT  

**Output Table:** `disruption_events`

---

### Worker Matching Engine

Matches affected workers based on:

- Location/zone  
- Active policy  
- Activity status  

**Tables:**
- `workers`  
- `policies`  
- `worker_activity`  

---

### Claim Engine

Fully automated (zero-touch claims)

**Claim Lifecycle:**


CREATED → UNDER_REVIEW → APPROVED → PAID
↓
FLAGGED → REJECTED


---

### Payout Engine

- Instant payout after approval  
- Simulated via:
  - UPI Mock  
  - Razorpay Sandbox  

---

## AI/ML System

### Risk Scoring Engine

**Models:**
- Random Forest  
- Gradient Boosting  

**Output:**

risk_score ∈ [0,1]


**Formulas:**

premium = base_premium × (1 + risk_score)
coverage = weekly_income × protection_factor


---

### Fraud Detection Engine

**Model:**
- Isolation Forest  

**Features:**
- movement_speed  
- gps_variance  
- idle_time  
- order_frequency  
- zone_switch_rate  

**Output:**

fraud_score ∈ [0,1]


---

## Adversarial Defense and Anti-Spoofing

### Threat Model

Fraudsters may:

- Spoof GPS  
- Fake presence in disruption zones  
- Trigger mass payouts  
- Drain liquidity  

GPS-only validation is exploitable.

---

### Multi-Signal Verification

**Data Sources:**

- GPS coordinates  
- Movement patterns  
- Order activity  
- IP location  
- Session telemetry  
- Behavioral history  

---

### Feature Engineering

- movement_speed  
- route_continuity_score  
- orders_per_hour  
- idle_time_ratio  
- gps_jump_distance  
- ip_location_mismatch_flag  
- session_stability_score  
- behavior_similarity_score  
- zone_claim_density  

---

### Fraud Detection Pipeline

#### Layer 1: Rule-Based

- Worker offline → Reject  
- No activity → Suspicious  
- GPS anomaly → Flag  
- IP mismatch → Reject  

#### Layer 2: AI-Based

- Isolation Forest detects anomalies  
- Outputs `fraud_score ∈ [0,1]`  

---

### Fraud Ring Detection


IF high_claim_density AND short_time_window AND high_behavior_similarity
THEN FRAUD_CLUSTER


---

### Trust Score Engine


trust_score ∈ [0,1]


| Trust Score | Action                |
|------------|---------------------|
| > 0.7      | Instant payout       |
| 0.4–0.7    | Delayed verification |
| < 0.4      | Manual review        |

---

### Claim Decision Engine

**Inputs:**
- fraud_score  
- trust_score  
- event validity  

**Outputs:**
- APPROVED  
- FLAGGED  
- REJECTED  

---

## UX Fairness Layer

- No instant rejection  
- "Under Verification" status  
- Delayed payouts instead of denial  
- Transparent claim tracking  

---

## Backend API Design (Spring Boot)

### Auth APIs

POST /api/auth/login
POST /api/auth/register
GET /api/auth/profile


### Worker APIs

GET /api/workers/{id}
GET /api/workers/{id}/policies
GET /api/workers/{id}/claims
GET /api/workers/{id}/payouts


### Policy APIs

POST /api/policies/create
GET /api/policies/{id}
GET /api/policies/worker/{workerId}


### Event APIs

POST /api/events/generate
GET /api/events
GET /api/events/{id}


### Claim APIs

POST /api/claims/create
GET /api/claims/{id}
GET /api/claims/worker/{workerId}
PATCH /api/claims/{id}/status


### Payout APIs

POST /api/payouts/process
GET /api/payouts/{id}
GET /api/payouts/worker/{workerId}


### Fraud APIs

POST /api/fraud/analyze
GET /api/fraud/logs
GET /api/fraud/clusters


### Trust APIs

GET /api/trust/{workerId}
POST /api/trust/update


### Admin APIs

GET /api/admin/analytics
GET /api/admin/claims
GET /api/admin/fraud
POST /api/admin/override-claim


---

## Adversarial Defense Summary

| Traditional System      | ParametriX                  |
|------------------------|-----------------------------|
| GPS-only validation    | Multi-signal verification   |
| Static rules           | AI + rules hybrid           |
| No cluster detection   | Fraud ring detection        |
| Binary decisions       | Trust-based system          |

---

## Data Model

- workers  
- policies  
- environment_data  
- disruption_events  
- worker_activity  
- claims  
- payouts  
- fraud_logs  
- trust_scores  
- fraud_clusters  

---



## Conclusion

ParametriX combines:

- Event-driven automation  
- AI-powered risk modeling  
- Multi-layer fraud detection  
- Real-time payouts  

**Outcome:**
- Secure against fraud rings  
- Fair for genuine users  
- Scalable for real-world deployment  

---

## Future Enhancements

- Kafka-based real-time streaming  
- Graph-based fraud detection  
- Device-level signal integration  
- Reinforcement learning pricing 