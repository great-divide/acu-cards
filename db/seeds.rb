# create channels
lu = Channel.create(name: 'Lung', abb: 'Lu')
li = Channel.create(name: 'Large Intestine', abb: 'Li')
st = Channel.create(name: 'Stomach', abb: 'St')
gb = Channel.create(name: 'Gallbladder', abb: 'Gb')
sp = Channel.create(name: 'Spleen', abb: 'Sp')
ht = Channel.create(name: 'Heart', abb: 'Ht')
si = Channel.create(name: 'Small Intesting', abb: 'Si')

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

sp6 = Point.create(name: 'Spleen 6', abb: 'Sp6', location: '3 cun superior to the medial malleolus')
sp6.image.attach(io: File.open(Rails.root + 'app/assets/images/sp6.png'), filename: 'sp6.png', content_type: 'image/png')

sp3 = Point.create(name: 'Spleen 3', abb: 'Sp3', location: 'in the depression distal and inferior to the first metatarso-phalangeal joint')
sp3.image.attach(io: File.open(Rails.root + 'app/assets/images/sp3.png'), filename: 'sp3.png', content_type: 'image/png')

sp21 = Point.create(name: 'Spleen 21', abb: 'Sp21', location: 'on the axillary midline in the 7th intercostal space')
sp21.image.attach(io: File.open(Rails.root + 'app/assets/images/sp21.png'), filename: 'sp21.png', content_type: 'image/png')

ht9 = Point.create(name: 'Heart 9', abb: 'Ht9', location: 'medial corner of little fingernail')
ht9.image.attach(io: File.open(Rails.root + 'app/assets/images/ht9.png'), filename: 'ht9.png', content_type: 'image/png')

ht8 = Point.create(name: 'Heart 8', abb: 'Ht8', location: 'on the palm in depression between 4th and 5th metacarpal bones')
ht8.image.attach(io: File.open(Rails.root + 'app/assets/images/ht8.png'), filename: 'ht8.png', content_type: 'image/png')

si8 = Point.create(name: 'Small Intestine', abb: 'Si8', location: '')
si8.image.attach(io: File.open(Rails.root + 'app/assets/images/si8.png'), filename: 'si8.png', content_type: 'image/png')

si8 = Point.create(name: 'Small Intestine 8', abb: 'Si8', location: 'depression to the medial side of olecranon process')
si8.image.attach(io: File.open(Rails.root + 'app/assets/images/si8.png'), filename: 'si8.png', content_type: 'image/png')

si9 = Point.create(name: 'Small Intestine 9', abb: 'Si9', location: '1 cun above posterior axillary crease')
si9.image.attach(io: File.open(Rails.root + 'app/assets/images/si9.png'), filename: 'si9.png', content_type: 'image/png')


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

sp6.channel_id = sp.id
sp6.save
sp3.channel_id = sp.id
sp3.save
sp21.channel_id = sp.id
sp21.save

ht8.channel_id = ht.id
ht8.save
ht9.channel_id = ht.id
ht9.save

si8.channel_id = si.id
si8.save
si9.channel_id = si.id
si9.save
