# RailJourneyOptimizer Data Flow

## Step 1

User enters

- Train Number
- Journey Date
- Boarding Station
- Destination Station
- Travel Class
- Allow Mixed Class

↓

## Step 2

Fetch Train Route

Source:
RailRadar API

↓

Example

MUGR

BDCR

KAREPALLI

DKJ

MABD

WL

KZJ

JANGAON

BG

SC

↓

## Step 3

Wait until chart preparation

↓

## Step 4

Fetch Chart Vacancy

Source:
Official IRCTC Chart Vacancy

↓

Example

Coach | Berth | From | To

A1 | 23 | DKJ | KZJ

A1 | 15 | KZJ | SC

A2 | 41 | WL | SC

↓

## Step 5

Journey Optimizer

Input

Route

+

Vacant Berths

+

Journey Request

↓

Generate Recommendations

↓

Calculate Journey Score

↓

Sort

↓

Top 2 Recommendations