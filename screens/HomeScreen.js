import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput, ScrollView, Alert, Linking } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../components/Navbar/Navbar';





export default function HomeScreen() {
    const [selectedApp, setSelectedApp] = useState('snapchat');
    const [link, setlink] = useState('');
    const [validlink, setValidlink] = useState(false);
    const [quality, SetQuality] = useState('144');
    const navigation = useNavigation();

    const handleSelectedApp = (appName) =>{
        if(appName === 'instagram')
            setSelectedApp('instagram')
        else if(appName === 'facebook')
            setSelectedApp('facebook')
        else if(appName === 'snapchat')
            setSelectedApp('snapchat')
        else if(appName === 'tiktok')
            setSelectedApp('tiktok')
    }

    const handleDownload = async () => {
        setValidlink(true);
        console.log('test');
        
        //instagram
        if(selectedApp === 'instagram')
        {
            const formDataInsta = new FormData();
            formDataInsta.append('recaptchaToken', '');
            formDataInsta.append('q', link);
            formDataInsta.append('t', 'media');
            formDataInsta.append('lang', 'en');

            try {
                const response = await fetch('https://v3.igdownloader.app/api/ajaxSearch', {
                    method: 'post',
                    body: formDataInsta,
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch download link');
                }
                
                const data = await response.json();
                let img = data.data.substring(data.data.indexOf('<img src="') + 9,data.data.indexOf('\" alt=\"igdownloader\">'));
                let link = data.data.substring(data.data.indexOf(')\" href=\"') + 9,data.data.indexOf('\" class=\"abutton is-success is-fullwidth'));
                console.log('====================================');
                console.log('image link: ',img);
                console.log('video link: ',link);
                console.log('====================================');
                
            } catch (error) {
                console.error('Error:', error.message);
            }
        }
        if (selectedApp === 'facebook') {
            const formDataInsta = new FormData();
            formDataInsta.append('URLz', 'https://www.facebook.com/watch/?v=1285185288855069');
            try {
                const response = await fetch('https://fdown.net/download.php', {
                    method: 'post',
                    body: formDataInsta,
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch download link');
                }
                const responseText = await response.text();
                let hadVideo = responseText.substring(responseText.indexOf('<div class="col-md-4 btns-download">\n<p>\n<a href="https://') + 50, responseText.indexOf('" target="_blank" class="btn btn-download" rel="nofollow" download>Download in <strong>HD</strong> Quality</a>'));
                console.log('hadVideo = ' + responseText);
                let normalVideo = responseText.substring(responseText.indexOf('g>HD</strong> Quality</a>\n</p>\n<p>\n<a href="') + 44, responseText.indexOf('" target="_blank" class="btn btn-download" rel="nofollow" download>Download in Normal Quality</a>'));
                console.log('normalVideo = ', normalVideo);;
            } catch (error) {
                console.error('Error:', error.message);
            }
        }
        
    };
    

      const handleDownloads = () =>{
        navigation.navigate('Downloads');
      }
      const downloadVideo = async (url, fileName) => {
        // try {
        //   const downloadDest = `${RNFS.DocumentDirectoryPath}/${fileName}.mp4`;
      
        //   const options = {
        //     fileCache: true,
        //     addAndroidDownloads: {
        //       useDownloadManager: true,
        //       notification: true,
        //       path: downloadDest,
        //       description: 'Downloading video',
        //     },
        //   };
      
        //   const jobId = RNFetchBlob.config(options).fetch('GET', url);
      
        //   RNFetchBlob.fs.readStream(
        //     downloadDest,
        //     'base64',
        //     0,
        //     -1,
        //   )
        //     .then((data) => {
        //       const content = data.toString('base64');
        //       console.log('Downloaded successfully!', content);
        //     })
        //     .catch((error) => {
        //       console.error('Error reading the downloaded file:', error);
        //     });
      
        //   RNFetchBlob.fs.unlink(downloadDest); // Remove the file after reading it if needed
      
        //   RNFetchBlob.fs.stat(downloadDest)
        //     .then((stats) => {
        //       const fileSize = stats.size;
        //       console.log('File size:', fileSize);
        //     })
        //     .catch((error) => {
        //       console.error('Error getting file size:', error);
        //     });
      
        //   RNFetchBlob.fetch('GET', url)
        //     .progress((received, total) => {
        //       const percentage = ((received / total) * 100).toFixed(2);
        //       console.log(`Downloaded: ${percentage}%`);
        //     })
        //     .then(() => {
        //       console.log('Download completed!');
        //     })
        //     .catch((error) => {
        //       console.error('Error downloading video:', error);
        //     });
        // } catch (error) {
        //   console.error('Error initiating download:', error);
        // }
      };

  return (

    <SafeAreaView>
        <Navbar></Navbar>
        <View>
            <View style={styles.imagesContainer}>
            <Image style={styles.Image} source={require('../assets/images/snaplogo.png')}></Image>
            <Image style={styles.Image} source={require('../assets/images/snaplogo.png')}></Image>
            <Image style={styles.Image} source={require('../assets/images/snaplogo.png')}></Image>
            <Image style={styles.Image} source={require('../assets/images/snaplogo.png')}></Image>
            </View>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.insertVideoTextStyle}>Please insert the URL link of the video</Text>
            <TextInput
                    placeholder={
                        'https://www.facebook.com/adekunle_ismail/'
                    }
                    style={styles.inputFeild}
                    onChangeText={(v) => setlink(v)}>
            </TextInput>
            <View>
                <TouchableOpacity>
                <Text>CONVERT</Text>
                </TouchableOpacity>
            </View>
        </View>
        {/* <View style={styles.navbar}>
            <Text style={styles.title}>Downloader</Text>
            <TouchableOpacity style={styles.button} onPress={handleDownloads}>
                <Icon.Download color={colors.button}></Icon.Download>
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <View style={styles.icons}>
            <TouchableOpacity style={{
                margin: 10,
                padding: selectedApp === 'instagram' ? 20 : 10,
                backgroundColor: selectedApp === 'instagram' ? 'skyblue' : 'white',
                borderRadius: 50,
                shadowColor: selectedApp === 'instagram' ? 'black' : 'transparent',
                shadowOffset: selectedApp === 'instagram' ? { width: 0, height: 2 } : { width: 0, height: 0 }, // shadow offset
                shadowOpacity: selectedApp === 'instagram' ? 0.8 : 0,
                shadowRadius: selectedApp === 'instagram' ? 4 : 0,
                elevation: selectedApp === 'instagram' ? 5 : 0,
            }} onPress={() => handleSelectedApp('instagram')}>
                <Icon.Instagram color={selectedApp === 'instagram' ? 'red' : 'blue'}></Icon.Instagram>
            </TouchableOpacity>
            <TouchableOpacity style={{
                margin: 10,
                padding: selectedApp === 'facebook' ? 20 : 10,
                backgroundColor: selectedApp === 'facebook' ? 'skyblue' : 'white',
                borderRadius: 50,
                shadowColor: selectedApp === 'facebook' ? 'black' : 'transparent',
                shadowOffset: selectedApp === 'facebook' ? { width: 0, height: 2 } : { width: 0, height: 0 }, // shadow offset
                shadowOpacity: selectedApp === 'facebook' ? 0.8 : 0,
                shadowRadius: selectedApp === 'facebook' ? 4 : 0,
                elevation: selectedApp === 'facebook' ? 5 : 0,
            }} onPress={() => handleSelectedApp('facebook')}>
                <Icon.Facebook color={selectedApp === 'facebook' ? 'red' : 'blue'}></Icon.Facebook>
            </TouchableOpacity>
            <TouchableOpacity style={{
                margin: 10,
                padding: selectedApp === 'snapchat' ? 10 : 0,
                backgroundColor: selectedApp === 'snapchat' ? 'skyblue' : 'white',
                borderRadius: 50,
                shadowColor: selectedApp === 'snapchat' ? 'black' : 'transparent',
                shadowOffset: selectedApp === 'snapchat' ? { width: 0, height: 2 } : { width: 0, height: 0 }, // shadow offset
                shadowOpacity: selectedApp === 'snapchat' ? 0.8 : 0,
                shadowRadius: selectedApp === 'snapchat' ? 4 : 0,
                elevation: selectedApp === 'snapchat' ? 5 : 0,
            }} onPress={() => handleSelectedApp('snapchat')}>
                <Image source={require('../assets/images/snaplogo.png')}
                style={{
                    width: 45,
                    height: 45,
                }}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{
                margin: 10,
                padding: selectedApp === 'tiktok' ? 10 : 0,
                backgroundColor: selectedApp === 'tiktok' ? 'skyblue' : 'white',
                borderRadius: 50,
                shadowColor: selectedApp === 'tiktok' ? 'black' : 'transparent',
                shadowOffset: selectedApp === 'tiktok' ? { width: 0, height: 2 } : { width: 0, height: 0 }, // shadow offset
                shadowOpacity: selectedApp === 'tiktok' ? 0.8 : 0,
                shadowRadius: selectedApp === 'tiktok' ? 4 : 0,
                elevation: selectedApp === 'tiktok' ? 5 : 0,
            }} onPress={() => handleSelectedApp('tiktok')}>
                <Image source={require('../assets/images/tiktok.png')}
                style={{
                    width: 40,
                    height: 40,
                }}></Image>
            </TouchableOpacity>

        </View>
            <Text style={styles.text}>Please insert the URL link of <Text style={{color: 'blue', fontSize: 20,}}>{selectedApp.toUpperCase()}</Text> video</Text>
            <TextInput
                placeholder={
                    selectedApp === 'facebook' ? 'https://www.facebook.com/adekunle_ismail/' : 'https://www.instagram.com/adekunle_ismail/'
                }
                style={styles.inputFeild}
                onChangeText={(v) => setlink(v)}>
            </TextInput>
            <TouchableOpacity style={styles.DownloadButtonConvert} onPress={() => handleDownload()}>
                <Text>CONVERT</Text>
                <Icon.Settings></Icon.Settings>
            </TouchableOpacity>
            {validlink === false ? 
            <Text>waiting for a valid link</Text> :
                <ScrollView>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image source={require('../assets/images/1.png')} style={{
                            width: 200,
                            height: 200,
                        }}></Image>
                        <TouchableOpacity style={quality === '144' ?  styles.qualityButton1 : styles.qualityButton} onPress={() => SetQuality('144')}>
                            <Text>144p</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={quality === '720' ?  styles.qualityButton1 : styles.qualityButton} onPress={() => SetQuality('720')}>
                            <Text>720p</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={quality === '1080' ?  styles.qualityButton1 : styles.qualityButton} onPress={() => SetQuality('1080')}>
                            <Text>1080p</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.DownloadButton} onPress={() => downloadVideo('https://sample-videos.com/video321/mp4/240/big_buck_bunny_240p_30mb.mp4','test')}>
                            <Icon.Download color={'red'}></Icon.Download>
                            <Text>({quality})</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            }
        </View> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    imagesContainer:{

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputContainer:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },

    
    insertVideoTextStyle:{
        margin: 10,
        fontSize: 18,
    },

    button:{
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 50,
    },
    inputFeild:{
        backgroundColor: 'white',
        padding: 10,
        width: '90%',
        margin: 10,
    },
    text:{
        padding: 10,
        margin: 10,
    },
    icons:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    DownloadButton:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: '60%',
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 50,
    },
    qualityButton:{
        justifyContent: 'center',
        width: '40%',
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 50,
    },
    qualityButton1:{
        justifyContent: 'center',
        width: '40%',
        backgroundColor: 'skyblue',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 50,
    },
    DownloadButtonConvert:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: '40%',
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderRadius: 50,
    },
    Image:{
        width: 75,
        height: 75,
    }
  });