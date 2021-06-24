INSERT INTO internships (
  title,
  location,
  description,
  pay,
  date,
  image_url,
  date_posted
)
VALUES (${title}, ${location}, ${description}, ${pay}, ${date}, ${image_url}, ${date_posted})
RETURNING id