// =======================================
// Library Management System (Pseudocode)
// Language Style: JavaScript
// Purpose: Design-level logic, not full implementation
// =======================================

// ---------- Book ----------
class Book {
    constructor(bookId, title, author) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.status = "Available";
    }

    issueBook() {
        if (this.status === "Available") {
            this.status = "Issued";
        }
    }

    returnBook() {
        this.status = "Available";
    }
}

// ---------- Member ----------
class Member {
    constructor(memberId, name) {
        this.memberId = memberId;
        this.name = name;
    }

    borrowBook(book) {
        book.issueBook();
    }

    returnBook(book) {
        book.returnBook();
    }
}

// ---------- Librarian ----------
class Librarian {
    constructor(librarianId, name) {
        this.librarianId = librarianId;
        this.name = name;
    }

    addBook(book) {
        // store book in system
    }

    removeBook(bookId) {
        // remove book from system
    }

    registerMember(member) {
        // store member in system
    }
}

// ---------- Loan ----------
class Loan {
    constructor(loanId) {
        this.loanId = loanId;
        this.issueDate = null;
        this.returnDate = null;
    }

    createLoan() {
        this.issueDate = CURRENT_DATE;
    }

    closeLoan() {
        this.returnDate = CURRENT_DATE;
    }
}
