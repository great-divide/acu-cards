gb34 = Point.create(name: 'Gallbladder 34', abb: 'Gb34', location: 'next to the had of the fibula', channel: 'Gallbladder')

gb34.image.attach(io: File.open(Rails.root + 'app/assets/images/gb34.png'), filename: 'gb34.png', content_type: 'image/png')

st36 = Point.create(name: 'Stomach 36', abb: 'St36', location: 'lateral to anterior crest of tibia', channel: 'Stomach')

st36.image.attach(io: File.open(Rails.root + 'app/assets/images/st36.png'), filename: 'st36.png', content_type: 'image/png')

# foo = url_for(gb34.image)

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
