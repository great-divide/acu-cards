# create channels
lu = Channel.create(name: 'Lung', abb: 'Lu')
li = Channel.create(name: 'Large Intestine', abb: 'Li')
st = Channel.create(name: 'Stomach', abb: 'St')
# sp = Channel.create(name: 'Spleen', abb: 'Sp')
gb = Channel.create(name: 'Gallbladder', abb: 'Gb')

# create two test-points for each channel
lu7 = Point.create(name: 'Lung 7', abb: 'Lu7', location: 'On the radial aspect of the forearm, approximately 1.5 cun
proximal to Yangxi L.I.-5, in the cleft between the tendons
of brachioradialis and abductor pollicis longus.')
lu7.image.attach(io: File.open(Rails.root + 'app/assets/images/lu7.png'), filename: 'lu7.png', content_type: 'image/png')

lu5 = Point.create(name: 'Lung 5', abb: 'Gb34', location: 'On the cubital crease of the elbow, in the depression at the
radial side of the tendon of biceps brachii.')
lu5.image.attach(io: File.open(Rails.root + 'app/assets/images/lu5.png'), filename: 'lu5.png', content_type: 'image/png')

li4 = Point.create(name: 'Large Intestine 4', abb: 'Li4', location: 'at the midpoint of the second metacarpal
bone and close to its radial border.')
li4.image.attach(io: File.open(Rails.root + 'app/assets/images/li4.png'), filename: 'li4.png', content_type: 'image/png')

li11 = Point.create(name: 'Large Intestine 11', abb: 'Li11', location: 'At the elbow, midway between Chize LU-5 and the lateral
epicondyle of the humerus, at the lateral end of the
transverse cubital crease.')
li11.image.attach(io: File.open(Rails.root + 'app/assets/images/li11.png'), filename: 'li11.png', content_type: 'image/png')

st36 = Point.create(name: 'Stomach 36', abb: 'St36', location: 'lateral to anterior crest of tibia')
st36.image.attach(io: File.open(Rails.root + 'app/assets/images/st36.png'), filename: 'st36.png', content_type: 'image/png')

st37 = Point.create(name: 'Stomach 37', abb: 'St37', location: '3 cun inferior to St36')
st37.image.attach(io: File.open(Rails.root + 'app/assets/images/st37.png'), filename: 'st37.png', content_type: 'image/png')

gb34 = Point.create(name: 'Gallbladder 34', abb: 'Gb34', location: 'next to the head of the fibula')
gb34.image.attach(io: File.open(Rails.root + 'app/assets/images/gb34.png'), filename: 'gb34.png', content_type: 'image/png')

gb33 = Point.create(name: 'Gallbladder 33', abb: 'Gb33', location: 'in the depression above the lateral epicondyle of the 
femur, between the femur and tendon of biceps femoris')
gb33.image.attach(io: File.open(Rails.root + 'app/assets/images/gb33.png'), filename: 'gb33.png', content_type: 'image/png')


# attach points to corresponding channels
gb34.channel_id = gb.id
gb34.save
gb33.channel_id = gb.id
gb33.save

st36.channel_id = st.id
st36.save
st37.channel_id = st.id
st37.save

lu5.channel_id = lu.id
lu5.save
lu7.channel_id = lu.id
lu7.save

li4.channel_id = li.id
li4.save
li11.channel_id = li.id
li11.save
