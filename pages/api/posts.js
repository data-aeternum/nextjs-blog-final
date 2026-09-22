import { getSortedPostsData } from '../../lib/posts-json';

export default function handler(request, response) {
  response.status(200).json(getSortedPostsData());
}