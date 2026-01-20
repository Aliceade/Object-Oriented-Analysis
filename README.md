# Library Management System (LMS)
## Object-Oriented Analysis & Architectural Modeling

---

## 1. Introduction
This project presents the Object-Oriented Analysis (OOA) and architectural modeling of a simplified Library Management System (LMS).  
The system supports managing books, members, borrowing and returning of books, and administrative activities.

The purpose of this document is system analysis and design, not full implementation.

---

## 2. Requirement Analysis

### 2.1 Actors
- **Librarian**: Manages books, members, and transactions.
- **Member**: Searches, borrows, and returns books.

### 2.2 Use Cases
- Search Book
- Issue Book
- Return Book
- Add Book
- Remove Book
- Register Member

---

## 3. System Architecture Design

### 3.1 Major Components
- **Presentation Layer (UI)** – Handles user interaction.
- **Business Logic Layer** – Applies system rules.
- **Data Access Layer** – Manages data storage.

### 3.2 High-Level Architecture Diagram
```mermaid
graph TD
    UI[User Interface]
    BL[Business Logic Layer]
    DA[Data Access Layer]
    DB[(Database)]

    UI --> BL
    BL --> DA
    DA --> DB
```
```mermaid
graph TD
    UI[User Interface]
    BL[Business Logic Layer]
    DA[Data Access Layer]
    DB[(Database)]

    UI --> BL
    BL --> DA
    DA --> DB
```