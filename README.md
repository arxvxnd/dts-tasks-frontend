# dts-tasks-frontend

## Purpose
Frontend interface for submitting new tasks to the backend API and displaying confirmation on successful creation.

## Planned Tech Stack
- Framework: React
- Build Tool: Vite
- Styling: Minimal CSS
- Testing: Jest and React Testing Library

## Planned Features
- Form fields: title, description, status, due_date_time
- Client-side validation
- Submission to backend POST /tasks
- Display of success message with returned task details
- Display of validation and server errors

## To Be Added Later
- Setup and run instructions
- Environment variable for backend API URL
- Instructions for running tests
- Screenshots or short demonstration
- Notes on error handling behaviour

## Design Decisions
- Form behaviour: block submission on empty title or invalid datetime
- Status options: todo, in_progress, done
- Error display: inline field-level errors and a general error banner for server-side issues
