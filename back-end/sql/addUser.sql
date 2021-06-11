INSERT INTO "student_users" {
  "first_name",
  "last_name",
  "email",
  "pass"
}
VALUES (${first_name}, ${last_name}, ${email}, ${pass})
RETURNING *