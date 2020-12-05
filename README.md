Create a container to the database

docker run --name=dockersql -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=R4e3w2q1@' -p 1433:1433 -d mcr.microsoft.com/mssql/server:2019-latest

dotnet tools install dotnet-ef --global

dotnet ef database update