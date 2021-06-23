SELECT
DISTINCT ON (applications.opp_id) opp_id,
comments, file_url, status, image_url, title, description, date
FROM internships JOIN applications ON opp_id=id