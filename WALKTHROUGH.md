# MoviesLand Automated Testing Walkthrough

## Overview

This document showcases the automated browser testing of the MoviesLand application, demonstrating all required functionality including authentication, CRUD operations, and access control. All tests were performed on the live Heroku deployment at https://moviesland-app-74ea9299f6f8.herokuapp.com/.

---

## Testing Scenarios

### Phase 1: Authentication Testing
- [x] User registration with validation
- [x] Login/logout functionality
- [x] Session persistence

### Phase 2: CRUD Operations Testing
- [x] Add movie with validation (empty form, invalid data)
- [x] View movie details
- [x] Edit movie functionality

### Phase 3: Access Control Testing
- [x] Protected routes (must be logged in)
- [x] Ownership restrictions (only owner can edit/delete)
- [x] Multi-user scenario

### Phase 4: Complete User Journey
- [x] Full end-to-end workflow
- [x] Database persistence demonstration
- [x] All 14 requirements validation

**Status**: All testing phases completed successfully

---

## Test Recordings

Three comprehensive browser recordings were created, capturing all testing scenarios:

### 1. Authentication Testing
![Authentication Testing Recording](docs/testing/auth_testing.webp)

**Duration**: ~2 minutes  
**Coverage**: User registration, login/logout, validation errors

### 2. CRUD Operations Testing
![CRUD Operations Recording](docs/testing/crud_testing.webp)

**Duration**: ~2 minutes  
**Coverage**: Complete movie creation with validation, successful edit demonstration

### 3. Edit and Access Control Testing
![Edit and Access Control Recording](docs/testing/access_control_testing.webp)

**Duration**: ~1 minute  
**Coverage**: Edit form access, ownership restrictions, unauthorized access

---

## Test Results Summary

### Phase 1: Authentication Testing

#### Test 1.1: Empty Form Validation
**Result**: PASS

![Empty Form Errors](docs/screenshots/empty_form_errors.png)

- Empty registration form triggered all required field errors
- Validation messages displayed correctly
- Form prevented submission without data

#### Test 1.2: Password Length Validation
**Result**: PASS

![Password Length Error](docs/screenshots/password_length_error.png)

- Password with < 6 characters rejected
- Error message: "Password must be at least 6 characters"

#### Test 1.3: Successful Registration
**Result**: PASS

![Successful Registration](docs/screenshots/successful_registration.png)

- User `testuser2@example.com` registered successfully
- Automatic login after registration
- Redirect to `/movies/new` page
- Username displayed in header

#### Test 1.4: Logout Functionality
**Result**: PASS

![Logout Page](docs/screenshots/logout_page.png)

- Logout button clicked
- Session destroyed
- Redirected to `/auth/login`
- Username removed from header

#### Test 1.5: Login Validation - Wrong Email
**Result**: PASS

![Wrong Email Error](docs/screenshots/wrong_email_error.png)

- Invalid email entered
- Error message: "No account with that email"
- Login prevented

#### Test 1.6: Login Validation - Wrong Password
**Result**: PASS

![Wrong Password Error](docs/screenshots/wrong_password_error.png)

- Correct email with wrong password
- Error message: "Incorrect password"
- Login prevented

#### Test 1.7: Successful Login
**Result**: PASS

![Successful Login](docs/screenshots/successful_login.png)

- Correct credentials accepted
- Redirect to `/movies/new`
- Session active
- Username displayed in navigation

---

### Phase 2: CRUD Operations Testing ✅

#### Test 2.1: Add Movie - Empty Form Validation
**Result**: PASS

- Submitted empty movie form
- Multiple validation errors appeared
- Required fields (name, year, director) flagged

#### Test 2.2: Add Movie - Invalid Year Validation
**Result**: PASS

![Invalid Year Error](docs/screenshots/invalid_year_error.png)

- Entered year: 1800 (before minimum 1888)
- Validation error triggered
- Form prevented submission

#### Test 2.3: Add Movie - Invalid Rating Validation
**Result**: PASS

![Invalid Rating Error](docs/screenshots/invalid_rating_error.png)

- Entered rating: 15 (exceeds maximum 10)
- Validation error triggered
- Form prevented submission

#### Test 2.4: Successful Movie Creation
**Result**: PASS

![Movie Details](docs/testing/movie_created.png)

**Movie Created:**
- **Name**: The Shawshank Redemption
- **Director**: Frank Darabont
- **Year**: 1994
- **Genres**: Drama, Crime
- **Rating**: 9.3
- **Description**: Two imprisoned men bond over a number of years, finding redemption through acts of common decency.

**Validation:**
- Successfully created and saved to MongoDB
- Redirected to movie details page: `/movies/:id`
- All fields displayed correctly
- Owner field automatically populated

#### Test 2.5: View Movie Details
**Result**: PASS

- Movie details page loads successfully
- All information displayed correctly
- URL shows movie ID: `/movies/:id`
- Edit button visible to owner

---

### Phase 3: Access Control Testing ✅

#### Test 3.1: Edit Form Access (Owner)
**Result**: PASS

![Edit Form](docs/screenshots/edit_form.png)

- Clicked "Edit Movie" button
- Successfully navigated to `/movies/:id/edit`
- Form pre-populated with existing movie data
- All fields editable for owner

#### Test 3.2: View Movie as Non-Owner
**Result**: PASS

![Non-Owner View](docs/screenshots/nonowner_view.png)

- Logged out original user
- Viewed movie details while not logged in
- - NO Edit button visible**
- - NO Delete button visible**
- Movie details still viewable (read-only)

#### Test 3.3: Unauthorized Edit Access
**Result**: PASS

![Access Denied](docs/testing/access_denied.png)

- Attempted direct URL access: `/movies/:id/edit`
- Not logged in (or different user)
- - Redirected to login page**
- Access denied by `isLoggedIn` middleware
- Demonstrates proper authentication protection

---

## Database Persistence

All movie data is successfully persisted in **MongoDB Atlas** cloud database. The screenshot below shows the actual data stored in the `moviesLand` database, `movies` collection:

![MongoDB Atlas Data Explorer](docs/screenshots/mongodb_atlas_data.png)

**Database Evidence:**
- Movies collection showing all created movies
- Document structure with all fields (name, description, year, genres, rating, director, owner)
- Owner references linking movies to users
- Data persists across sessions and application restarts
- Cloud-hosted on MongoDB Atlas for production reliability

---

