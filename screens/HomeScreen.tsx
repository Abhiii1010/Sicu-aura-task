import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const stories = [
  {id: '1', name: 'Create Story', image: require('../assets/images/story.png')},
  {id: '2', name: 'John', image: require('../assets/images/2.png')},
  {id: '3', name: 'Doe', image: require('../assets/images/3.png')},
  {id: '4', name: 'Anna', image: require('../assets/images/4.png')},
  {id: '4', name: 'Anna', image: require('../assets/images/4.png')},
  {id: '4', name: 'Anna', image: require('../assets/images/4.png')},
];

const posts = [
  {
    id: '1',
    username: 'raj__2255',
    text: 'one of the most popular thinking about so raining',
    profileImage: require('../assets/images/p.png'),
    postImage: require('../assets/images/post.png'),
  },
  {
    id: '2',
    username: 'raj__2255',
    text: 'one of the most popular thinking about so raining',
    profileImage: require('../assets/images/p.png'),
    postImage: require('../assets/images/post.png'),
  },
  {
    id: '3',
    username: 'raj__2255',
    text: 'one of the most popular thinking about so raining',
    profileImage: require('../assets/images/p.png'),
    postImage: require('../assets/images/post.png'),
  },
];

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderTabContent = () => {
    if (activeTab === 'Home') {
      return (
        <>
          {/* Search Input */}
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 12}}>
            <View style={styles.side}>
              {' '}
            <Image source={require('../assets/images/p.png')}/>
            </View>
            <View style={styles.searchBox}>
              <TextInput placeholder="Write something here..." />
            </View>
            <View style={styles.side}>
              {' '}
              <Icon name="image" size={24} color="green" />
            </View>
          </View>

          {/* Stories */}
          <View>
            <View style={styles.storyHeader}>
              <Text style={styles.activeTabText}>Stories</Text>
              <Text style={styles.inactiveTabText}>Reels</Text>
            </View>
            <FlatList
              data={stories}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity>
                  <View style={styles.storyItem}>
                    <Image source={item.image} style={styles.storyImage} />
                    <Text style={styles.storyName}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>

          {/* Posts */}
          {posts.map(post => (
            <View key={post.id} style={styles.post}>
              <View style={styles.postHeader}>
                <Image source={post.profileImage} style={styles.profileImage} />
                <View style={{flex: 1, marginLeft: 10}}>
                  <Text style={styles.username}>{post.username}</Text>
                  <Text>{post.text}</Text>
                </View>
                <Icon name="close" size={20} style={{marginLeft: 'auto'}} />
              </View>
              <Image source={post.postImage} style={styles.postImage} />
              <View style={styles.postActions}>
               
                <Text>👍 pari roy and 453 others</Text>
                <Text>251 comments</Text>
              </View>
              <View style={styles.postFooter}>
                <Icon name='heart-outline' size={24} color="#555"/>
                <Icon name='chatbubble-outline' size={24} color="#555"/>
                <Icon name='share-social-outline' size={24} color="#555"/>
              </View>
            </View>
          ))}
        </>
      );
    }

    // Other placeholder screens
    return (
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>{activeTab} Screen</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Top Logo Bar */}
      <View style={styles.topBar}>
        <Text style={styles.logo}>facebook</Text>
        <View style={styles.topIcons}>
          <Icon name="search" size={22} style={styles.icon} />
          <Icon
            name="chatbubble-ellipses-outline"
            size={22}
            style={styles.icon}
          />
        </View>
      </View>

      {/* Top Tab Bar */}
      <View style={styles.tabBar}>
        {['Home', 'Friends', 'Notifications', 'Menu'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={styles.tabButton}>
            <Icon
              name={
                tab === 'Home'
                  ? 'home'
                  : tab === 'Friends'
                  ? 'people'
                  : tab === 'Notifications'
                  ? 'notifications'
                  : 'menu'
              }
              size={22}
              color={activeTab === tab ? '#1877F2' : 'gray'}
            />
            <Text style={{color: activeTab === tab ? '#1877F2' : 'gray'}}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {renderTabContent()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  logo: {fontSize: 24, fontWeight: 'bold', color: '#1877F2'},
  topIcons: {flexDirection: 'row'},
  icon: {marginHorizontal: 5},
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tabButton: {alignItems: 'center'},
  activeTabText: {fontWeight: 'bold', color: '#1877F2'},
  inactiveTabText: {color: 'gray'},
  searchBox: {
    flex: 1,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 20,
  },

  side: {
    flexShrink: 1,
    flexGrow: 0,
    flexBasis: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },

  storyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  storyItem: {
    width: 80,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  storyImage: {width: 70, height: 100, borderRadius: 10},
  storyName: {fontSize: 12, textAlign: 'center', marginTop: 5},
  post: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
  },
  postHeader: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
  profileImage: {width: 40, height: 40, borderRadius: 20},
  username: {fontWeight: 'bold'},
  postImage: {width: '100%', height: 200, borderRadius: 10},
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  placeholder: {padding: 20, alignItems: 'center'},
  placeholderText: {fontSize: 18},
});

export default HomeScreen;
