# Use a lightweight JDK
FROM eclipse-temurin:17-jdk-alpine

# Set working dir
WORKDIR /app

# Copy Maven wrapper + pom.xml first (for caching)
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Install dependencies (caches layers)
RUN ./mvnw dependency:go-offline

# Copy the source code
COPY src ./src

# Package the app (skip tests for now)
RUN ./mvnw package -DskipTests

# Run the app
CMD ["java", "-jar", "target/backend-0.0.1-SNAPSHOT.jar"]
