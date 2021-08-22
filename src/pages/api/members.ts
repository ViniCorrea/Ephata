import { member, membersList } from "../../mocks/members";

export default function handler(req, res) {
  const { id } = req.query;

  if (id) {
    res.status(200).json(member);
    return;
  }
  res.status(200).json(membersList());
  return;
}
