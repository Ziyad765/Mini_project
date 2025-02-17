/*
  # Fix Profile Table Security Policies

  1. Changes
    - Update RLS policies for the profiles table to allow:
      - Profile creation during signup
      - Profile reading by authenticated users
      - Profile updates by owner
  
  2. Security
    - Enable RLS on profiles table (already enabled)
    - Add policies for insert, select, and update operations
    - Maintain data privacy while allowing necessary operations
*/

-- Drop existing policies if any
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;

-- Create new policies
CREATE POLICY "Users can create their own profile"
ON profiles FOR INSERT
WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view all profiles"
ON profiles FOR SELECT
USING (true);

CREATE POLICY "Users can update own profile"
ON profiles FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);