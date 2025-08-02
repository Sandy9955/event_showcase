-- Create the events table
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  event_date TIMESTAMP WITH TIME ZONE NOT NULL,
  image_url TEXT NOT NULL,
  tier TEXT NOT NULL CHECK (tier IN ('free', 'silver', 'gold', 'platinum')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on tier for better query performance
CREATE INDEX IF NOT EXISTS idx_events_tier ON events(tier);
CREATE INDEX IF NOT EXISTS idx_events_date ON events(event_date);

-- Insert sample events (2 per tier)
INSERT INTO events (title, description, event_date, image_url, tier) VALUES
-- Free tier events
('Community Meetup', 'Join our monthly community gathering to network with fellow members and share experiences.', '2024-09-15 18:00:00+00', '/placeholder.svg?height=200&width=400', 'free'),
('Beginner Workshop', 'Learn the basics in this introductory workshop designed for newcomers to our platform.', '2024-09-22 14:00:00+00', '/placeholder.svg?height=200&width=400', 'free'),

-- Silver tier events
('Advanced Training Session', 'Deep dive into advanced techniques and strategies with our expert instructors.', '2024-09-18 16:00:00+00', '/placeholder.svg?height=200&width=400', 'silver'),
('Silver Member Exclusive', 'Special event exclusively for Silver tier members featuring guest speakers and networking.', '2024-09-25 19:00:00+00', '/placeholder.svg?height=200&width=400', 'silver'),

-- Gold tier events
('VIP Masterclass', 'Exclusive masterclass with industry leaders sharing insider knowledge and strategies.', '2024-09-20 15:00:00+00', '/placeholder.svg?height=200&width=400', 'gold'),
('Gold Summit Conference', 'Annual summit featuring keynote speakers, workshops, and premium networking opportunities.', '2024-10-05 09:00:00+00', '/placeholder.svg?height=200&width=400', 'gold'),

-- Platinum tier events
('Platinum Gala Dinner', 'Exclusive black-tie gala dinner with celebrity guests and premium entertainment.', '2024-10-12 19:00:00+00', '/placeholder.svg?height=200&width=400', 'platinum'),
('Executive Retreat', 'Ultra-exclusive retreat for Platinum members featuring private consultations and luxury amenities.', '2024-10-20 10:00:00+00', '/placeholder.svg?height=200&width=400', 'platinum');
