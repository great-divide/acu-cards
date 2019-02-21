gb34 = Point.create(name: 'Gallbladder 34', abb: 'Gb34', location: 'next to the head of the fibula')
gb34.image.attach(io: File.open(Rails.root + 'app/assets/images/gb34.png'), filename: 'gb34.png', content_type: 'image/png')

gb33 = Point.create(name: 'Gallbladder 33', abb: 'Gb33', location: 'in the depression above the lateral epicondyle of the 
femur, between the femur and tendon of biceps femoris')
gb33.image.attach(io: File.open(Rails.root + 'app/assets/images/gb33.png'), filename: 'gb33.png', content_type: 'image/png')


st36 = Point.create(name: 'Stomach 36', abb: 'St36', location: 'lateral to anterior crest of tibia')
st36.image.attach(io: File.open(Rails.root + 'app/assets/images/st36.png'), filename: 'st36.png', content_type: 'image/png')

st37 = Point.create(name: 'Stomach 37', abb: 'St37', location: '3 cun inferior to St36')
st37.image.attach(io: File.open(Rails.root + 'app/assets/images/st37.png'), filename: 'st37.png', content_type: 'image/png')

gb = Channel.create(name: 'Gallbladder', abb: 'Gb')

st = Channel.create(name: 'Stomach', abb: 'St')

gb34.channel_id = gb.id
gb34.save
gb33.channel_id = gb.id
gb33.save

st36.channel_id = st.id
st36.save
st37.channel_id = st.id
st37.save


# foo = url_for(gb34.image)

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
