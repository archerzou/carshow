﻿FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

COPY carshow.sln ./
COPY src/SearchService/SearchService.csproj ./src/SearchService/
COPY src/Contracts/Contracts.csproj ./src/Contracts/

RUN dotnet restore ./src/SearchService/SearchService.csproj

COPY . . 
RUN dotnet publish ./src/SearchService/SearchService.csproj -c Release -o /app/publish

# Runtime Stage
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
EXPOSE 80
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "SearchService.dll"]