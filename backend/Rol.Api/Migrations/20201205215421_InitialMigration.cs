using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Rol.Api.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Congregations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Principal = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Congregations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CongregationContacts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ContactType = table.Column<int>(type: "int", nullable: false),
                    Contact = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Principal = table.Column<bool>(type: "bit", nullable: false),
                    CongregationId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CongregationContacts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CongregationContacts_Congregations_CongregationId",
                        column: x => x.CongregationId,
                        principalTable: "Congregations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Members",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: false),
                    RegistrationNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BirthDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BaptismDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreationDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    ModificationDate = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValueSql: "GETDATE()"),
                    RoleId = table.Column<int>(type: "int", nullable: false),
                    CongregationId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Members", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Members_Congregations_CongregationId",
                        column: x => x.CongregationId,
                        principalTable: "Congregations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Members_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MemberContacts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ContactType = table.Column<int>(type: "int", nullable: false),
                    Contact = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Principal = table.Column<bool>(type: "bit", nullable: false),
                    MemberId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MemberContacts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MemberContacts_Members_MemberId",
                        column: x => x.MemberId,
                        principalTable: "Members",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Congregations",
                columns: new[] { "Id", "Address", "Name", "Principal" },
                values: new object[,]
                {
                    { 1, "Algum lugar", "Matriz", true },
                    { 2, "Algum outro lugar", "Outro", true }
                });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Pastor" },
                    { 2, "Obreiro" }
                });

            migrationBuilder.InsertData(
                table: "CongregationContacts",
                columns: new[] { "Id", "CongregationId", "Contact", "ContactType", "Principal" },
                values: new object[,]
                {
                    { 1, 1, "77777777", 0, true },
                    { 2, 2, "88888888", 0, true }
                });

            migrationBuilder.InsertData(
                table: "Members",
                columns: new[] { "Id", "Address", "BaptismDate", "BirthDate", "CongregationId", "Name", "RegistrationNumber", "RoleId" },
                values: new object[,]
                {
                    { 1, "Lugar nenhum", new DateTime(2020, 12, 5, 18, 54, 20, 519, DateTimeKind.Local).AddTicks(5101), new DateTime(2001, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, "João Ninguém", "11111111", 1 },
                    { 2, "Lugar outro nenhum", new DateTime(2020, 12, 5, 18, 54, 20, 526, DateTimeKind.Local).AddTicks(1349), new DateTime(2002, 2, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), 2, "Maria Ninguém", "22222222", 2 }
                });

            migrationBuilder.InsertData(
                table: "MemberContacts",
                columns: new[] { "Id", "Contact", "ContactType", "MemberId", "Principal" },
                values: new object[] { 1, "55555555", 0, 1, true });

            migrationBuilder.InsertData(
                table: "MemberContacts",
                columns: new[] { "Id", "Contact", "ContactType", "MemberId", "Principal" },
                values: new object[] { 2, "44444444", 0, 2, true });

            migrationBuilder.CreateIndex(
                name: "IX_CongregationContacts_CongregationId",
                table: "CongregationContacts",
                column: "CongregationId");

            migrationBuilder.CreateIndex(
                name: "IX_MemberContacts_MemberId",
                table: "MemberContacts",
                column: "MemberId");

            migrationBuilder.CreateIndex(
                name: "IX_Members_CongregationId",
                table: "Members",
                column: "CongregationId");

            migrationBuilder.CreateIndex(
                name: "IX_Members_RoleId",
                table: "Members",
                column: "RoleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CongregationContacts");

            migrationBuilder.DropTable(
                name: "MemberContacts");

            migrationBuilder.DropTable(
                name: "Members");

            migrationBuilder.DropTable(
                name: "Congregations");

            migrationBuilder.DropTable(
                name: "Roles");
        }
    }
}
