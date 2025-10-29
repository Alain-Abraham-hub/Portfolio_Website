/*
  # Fix contact messages RLS policy

  1. Changes
    - Drop existing policy
    - Create new policy that allows anonymous users to insert messages
    - The policy needs WITH CHECK clause to work properly for INSERT operations
*/

DROP POLICY IF EXISTS "Anyone can submit contact messages" ON contact_messages;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);