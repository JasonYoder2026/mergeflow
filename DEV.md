# Running locally

## Frontend
- ```cd frontend```
- ```npm run dev```

## Backend
- ```docker compose up db```
- ```cd backend```
- ```$env:SPRING_PROFILES_ACTIVE="local"```
- ```.\mvnw spring-boot:run```

# Run container
- ```docker compose up --build```