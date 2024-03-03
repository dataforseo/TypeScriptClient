[Documentation](../README.md) / [Exports](../modules.md) / SerpApi

# Class: SerpApi

## Table of contents

### Constructors

- [constructor](SerpApi.md#constructor)

### Properties

- [baseUrl](SerpApi.md#baseurl)
- [http](SerpApi.md#http)
- [jsonParseReviver](SerpApi.md#jsonparsereviver)

### Methods

- [aiSummary](SerpApi.md#aisummary)
- [baiduOrganicTaskGetAdvanced](SerpApi.md#baiduorganictaskgetadvanced)
- [baiduOrganicTaskGetHtml](SerpApi.md#baiduorganictaskgethtml)
- [baiduOrganicTaskGetRegular](SerpApi.md#baiduorganictaskgetregular)
- [baiduOrganicTaskPost](SerpApi.md#baiduorganictaskpost)
- [baiduOrganicTasksFixed](SerpApi.md#baiduorganictasksfixed)
- [baiduOrganicTasksReady](SerpApi.md#baiduorganictasksready)
- [bingLocalPackLiveHtml](SerpApi.md#binglocalpacklivehtml)
- [bingLocalPackLiveRegular](SerpApi.md#binglocalpackliveregular)
- [bingLocalPackTaskGetHtml](SerpApi.md#binglocalpacktaskgethtml)
- [bingLocalPackTaskGetRegular](SerpApi.md#binglocalpacktaskgetregular)
- [bingLocalPackTaskPost](SerpApi.md#binglocalpacktaskpost)
- [bingLocalPackTasksFixed](SerpApi.md#binglocalpacktasksfixed)
- [bingLocalPackTasksReady](SerpApi.md#binglocalpacktasksready)
- [bingOrganicLiveAdvanced](SerpApi.md#bingorganicliveadvanced)
- [bingOrganicLiveHtml](SerpApi.md#bingorganiclivehtml)
- [bingOrganicLiveRegular](SerpApi.md#bingorganicliveregular)
- [bingOrganicTaskGetAdvanced](SerpApi.md#bingorganictaskgetadvanced)
- [bingOrganicTaskGetHtml](SerpApi.md#bingorganictaskgethtml)
- [bingOrganicTaskGetRegular](SerpApi.md#bingorganictaskgetregular)
- [bingOrganicTaskPost](SerpApi.md#bingorganictaskpost)
- [bingOrganicTasksFixed](SerpApi.md#bingorganictasksfixed)
- [bingOrganicTasksReady](SerpApi.md#bingorganictasksready)
- [googleDatasetInfoLiveAdvanced](SerpApi.md#googledatasetinfoliveadvanced)
- [googleDatasetInfoTaskGetAdvanced](SerpApi.md#googledatasetinfotaskgetadvanced)
- [googleDatasetInfoTaskPost](SerpApi.md#googledatasetinfotaskpost)
- [googleDatasetInfoTasksFixed](SerpApi.md#googledatasetinfotasksfixed)
- [googleDatasetInfoTasksReady](SerpApi.md#googledatasetinfotasksready)
- [googleDatasetSearchLiveAdvanced](SerpApi.md#googledatasetsearchliveadvanced)
- [googleDatasetSearchTaskGetAdvanced](SerpApi.md#googledatasetsearchtaskgetadvanced)
- [googleDatasetSearchTaskPost](SerpApi.md#googledatasetsearchtaskpost)
- [googleDatasetSearchTasksFixed](SerpApi.md#googledatasetsearchtasksfixed)
- [googleDatasetSearchTasksReady](SerpApi.md#googledatasetsearchtasksready)
- [googleEventsLiveAdvanced](SerpApi.md#googleeventsliveadvanced)
- [googleEventsTaskGetAdvanced](SerpApi.md#googleeventstaskgetadvanced)
- [googleEventsTaskPost](SerpApi.md#googleeventstaskpost)
- [googleEventsTasksFixed](SerpApi.md#googleeventstasksfixed)
- [googleEventsTasksReady](SerpApi.md#googleeventstasksready)
- [googleImagesLiveAdvanced](SerpApi.md#googleimagesliveadvanced)
- [googleImagesLiveHtml](SerpApi.md#googleimageslivehtml)
- [googleImagesTaskGetAdvanced](SerpApi.md#googleimagestaskgetadvanced)
- [googleImagesTaskGetHtml](SerpApi.md#googleimagestaskgethtml)
- [googleImagesTaskPost](SerpApi.md#googleimagestaskpost)
- [googleImagesTasksFixed](SerpApi.md#googleimagestasksfixed)
- [googleImagesTasksReady](SerpApi.md#googleimagestasksready)
- [googleJobsTaskGetAdvanced](SerpApi.md#googlejobstaskgetadvanced)
- [googleJobsTaskGetHtml](SerpApi.md#googlejobstaskgethtml)
- [googleJobsTaskPost](SerpApi.md#googlejobstaskpost)
- [googleJobsTasksFixed](SerpApi.md#googlejobstasksfixed)
- [googleJobsTasksReady](SerpApi.md#googlejobstasksready)
- [googleLocalFinderLiveAdvanced](SerpApi.md#googlelocalfinderliveadvanced)
- [googleLocalFinderLiveHtml](SerpApi.md#googlelocalfinderlivehtml)
- [googleLocalFinderTaskGetAdvanced](SerpApi.md#googlelocalfindertaskgetadvanced)
- [googleLocalFinderTaskGetHtml](SerpApi.md#googlelocalfindertaskgethtml)
- [googleLocalFinderTaskPost](SerpApi.md#googlelocalfindertaskpost)
- [googleLocalFinderTasksFixed](SerpApi.md#googlelocalfindertasksfixed)
- [googleLocalFinderTasksReady](SerpApi.md#googlelocalfindertasksready)
- [googleMapsLiveAdvanced](SerpApi.md#googlemapsliveadvanced)
- [googleMapsTaskGetAdvanced](SerpApi.md#googlemapstaskgetadvanced)
- [googleMapsTaskPost](SerpApi.md#googlemapstaskpost)
- [googleMapsTasksFixed](SerpApi.md#googlemapstasksfixed)
- [googleMapsTasksReady](SerpApi.md#googlemapstasksready)
- [googleNewsLiveAdvanced](SerpApi.md#googlenewsliveadvanced)
- [googleNewsLiveHtml](SerpApi.md#googlenewslivehtml)
- [googleNewsTaskGetAdvanced](SerpApi.md#googlenewstaskgetadvanced)
- [googleNewsTaskGetHtml](SerpApi.md#googlenewstaskgethtml)
- [googleNewsTaskPost](SerpApi.md#googlenewstaskpost)
- [googleNewsTasksFixed](SerpApi.md#googlenewstasksfixed)
- [googleNewsTasksReady](SerpApi.md#googlenewstasksready)
- [googleOrganicLiveAdvanced](SerpApi.md#googleorganicliveadvanced)
- [googleOrganicLiveHtml](SerpApi.md#googleorganiclivehtml)
- [googleOrganicLiveRegular](SerpApi.md#googleorganicliveregular)
- [googleOrganicTaskGetAdvanced](SerpApi.md#googleorganictaskgetadvanced)
- [googleOrganicTaskGetHtml](SerpApi.md#googleorganictaskgethtml)
- [googleOrganicTaskGetRegular](SerpApi.md#googleorganictaskgetregular)
- [googleOrganicTaskPost](SerpApi.md#googleorganictaskpost)
- [googleOrganicTasksFixed](SerpApi.md#googleorganictasksfixed)
- [googleOrganicTasksReady](SerpApi.md#googleorganictasksready)
- [googleSearchByImageTaskGetAdvanced](SerpApi.md#googlesearchbyimagetaskgetadvanced)
- [googleSearchByImageTaskPost](SerpApi.md#googlesearchbyimagetaskpost)
- [googleSearchByImageTasksFixed](SerpApi.md#googlesearchbyimagetasksfixed)
- [googleSearchByImageTasksReady](SerpApi.md#googlesearchbyimagetasksready)
- [naverOrganicTaskGetAdvanced](SerpApi.md#naverorganictaskgetadvanced)
- [naverOrganicTaskGetHtml](SerpApi.md#naverorganictaskgethtml)
- [naverOrganicTaskGetRegular](SerpApi.md#naverorganictaskgetregular)
- [naverOrganicTaskPost](SerpApi.md#naverorganictaskpost)
- [naverOrganicTasksFixed](SerpApi.md#naverorganictasksfixed)
- [naverOrganicTasksReady](SerpApi.md#naverorganictasksready)
- [processAiSummary](SerpApi.md#processaisummary)
- [processBaiduOrganicTaskGetAdvanced](SerpApi.md#processbaiduorganictaskgetadvanced)
- [processBaiduOrganicTaskGetHtml](SerpApi.md#processbaiduorganictaskgethtml)
- [processBaiduOrganicTaskGetRegular](SerpApi.md#processbaiduorganictaskgetregular)
- [processBaiduOrganicTaskPost](SerpApi.md#processbaiduorganictaskpost)
- [processBaiduOrganicTasksFixed](SerpApi.md#processbaiduorganictasksfixed)
- [processBaiduOrganicTasksReady](SerpApi.md#processbaiduorganictasksready)
- [processBingLocalPackLiveHtml](SerpApi.md#processbinglocalpacklivehtml)
- [processBingLocalPackLiveRegular](SerpApi.md#processbinglocalpackliveregular)
- [processBingLocalPackTaskGetHtml](SerpApi.md#processbinglocalpacktaskgethtml)
- [processBingLocalPackTaskGetRegular](SerpApi.md#processbinglocalpacktaskgetregular)
- [processBingLocalPackTaskPost](SerpApi.md#processbinglocalpacktaskpost)
- [processBingLocalPackTasksFixed](SerpApi.md#processbinglocalpacktasksfixed)
- [processBingLocalPackTasksReady](SerpApi.md#processbinglocalpacktasksready)
- [processBingOrganicLiveAdvanced](SerpApi.md#processbingorganicliveadvanced)
- [processBingOrganicLiveHtml](SerpApi.md#processbingorganiclivehtml)
- [processBingOrganicLiveRegular](SerpApi.md#processbingorganicliveregular)
- [processBingOrganicTaskGetAdvanced](SerpApi.md#processbingorganictaskgetadvanced)
- [processBingOrganicTaskGetHtml](SerpApi.md#processbingorganictaskgethtml)
- [processBingOrganicTaskGetRegular](SerpApi.md#processbingorganictaskgetregular)
- [processBingOrganicTaskPost](SerpApi.md#processbingorganictaskpost)
- [processBingOrganicTasksFixed](SerpApi.md#processbingorganictasksfixed)
- [processBingOrganicTasksReady](SerpApi.md#processbingorganictasksready)
- [processGoogleDatasetInfoLiveAdvanced](SerpApi.md#processgoogledatasetinfoliveadvanced)
- [processGoogleDatasetInfoTaskGetAdvanced](SerpApi.md#processgoogledatasetinfotaskgetadvanced)
- [processGoogleDatasetInfoTaskPost](SerpApi.md#processgoogledatasetinfotaskpost)
- [processGoogleDatasetInfoTasksFixed](SerpApi.md#processgoogledatasetinfotasksfixed)
- [processGoogleDatasetInfoTasksReady](SerpApi.md#processgoogledatasetinfotasksready)
- [processGoogleDatasetSearchLiveAdvanced](SerpApi.md#processgoogledatasetsearchliveadvanced)
- [processGoogleDatasetSearchTaskGetAdvanced](SerpApi.md#processgoogledatasetsearchtaskgetadvanced)
- [processGoogleDatasetSearchTaskPost](SerpApi.md#processgoogledatasetsearchtaskpost)
- [processGoogleDatasetSearchTasksFixed](SerpApi.md#processgoogledatasetsearchtasksfixed)
- [processGoogleDatasetSearchTasksReady](SerpApi.md#processgoogledatasetsearchtasksready)
- [processGoogleEventsLiveAdvanced](SerpApi.md#processgoogleeventsliveadvanced)
- [processGoogleEventsTaskGetAdvanced](SerpApi.md#processgoogleeventstaskgetadvanced)
- [processGoogleEventsTaskPost](SerpApi.md#processgoogleeventstaskpost)
- [processGoogleEventsTasksFixed](SerpApi.md#processgoogleeventstasksfixed)
- [processGoogleEventsTasksReady](SerpApi.md#processgoogleeventstasksready)
- [processGoogleImagesLiveAdvanced](SerpApi.md#processgoogleimagesliveadvanced)
- [processGoogleImagesLiveHtml](SerpApi.md#processgoogleimageslivehtml)
- [processGoogleImagesTaskGetAdvanced](SerpApi.md#processgoogleimagestaskgetadvanced)
- [processGoogleImagesTaskGetHtml](SerpApi.md#processgoogleimagestaskgethtml)
- [processGoogleImagesTaskPost](SerpApi.md#processgoogleimagestaskpost)
- [processGoogleImagesTasksFixed](SerpApi.md#processgoogleimagestasksfixed)
- [processGoogleImagesTasksReady](SerpApi.md#processgoogleimagestasksready)
- [processGoogleJobsTaskGetAdvanced](SerpApi.md#processgooglejobstaskgetadvanced)
- [processGoogleJobsTaskGetHtml](SerpApi.md#processgooglejobstaskgethtml)
- [processGoogleJobsTaskPost](SerpApi.md#processgooglejobstaskpost)
- [processGoogleJobsTasksFixed](SerpApi.md#processgooglejobstasksfixed)
- [processGoogleJobsTasksReady](SerpApi.md#processgooglejobstasksready)
- [processGoogleLocalFinderLiveAdvanced](SerpApi.md#processgooglelocalfinderliveadvanced)
- [processGoogleLocalFinderLiveHtml](SerpApi.md#processgooglelocalfinderlivehtml)
- [processGoogleLocalFinderTaskGetAdvanced](SerpApi.md#processgooglelocalfindertaskgetadvanced)
- [processGoogleLocalFinderTaskGetHtml](SerpApi.md#processgooglelocalfindertaskgethtml)
- [processGoogleLocalFinderTaskPost](SerpApi.md#processgooglelocalfindertaskpost)
- [processGoogleLocalFinderTasksFixed](SerpApi.md#processgooglelocalfindertasksfixed)
- [processGoogleLocalFinderTasksReady](SerpApi.md#processgooglelocalfindertasksready)
- [processGoogleMapsLiveAdvanced](SerpApi.md#processgooglemapsliveadvanced)
- [processGoogleMapsTaskGetAdvanced](SerpApi.md#processgooglemapstaskgetadvanced)
- [processGoogleMapsTaskPost](SerpApi.md#processgooglemapstaskpost)
- [processGoogleMapsTasksFixed](SerpApi.md#processgooglemapstasksfixed)
- [processGoogleMapsTasksReady](SerpApi.md#processgooglemapstasksready)
- [processGoogleNewsLiveAdvanced](SerpApi.md#processgooglenewsliveadvanced)
- [processGoogleNewsLiveHtml](SerpApi.md#processgooglenewslivehtml)
- [processGoogleNewsTaskGetAdvanced](SerpApi.md#processgooglenewstaskgetadvanced)
- [processGoogleNewsTaskGetHtml](SerpApi.md#processgooglenewstaskgethtml)
- [processGoogleNewsTaskPost](SerpApi.md#processgooglenewstaskpost)
- [processGoogleNewsTasksFixed](SerpApi.md#processgooglenewstasksfixed)
- [processGoogleNewsTasksReady](SerpApi.md#processgooglenewstasksready)
- [processGoogleOrganicLiveAdvanced](SerpApi.md#processgoogleorganicliveadvanced)
- [processGoogleOrganicLiveHtml](SerpApi.md#processgoogleorganiclivehtml)
- [processGoogleOrganicLiveRegular](SerpApi.md#processgoogleorganicliveregular)
- [processGoogleOrganicTaskGetAdvanced](SerpApi.md#processgoogleorganictaskgetadvanced)
- [processGoogleOrganicTaskGetHtml](SerpApi.md#processgoogleorganictaskgethtml)
- [processGoogleOrganicTaskGetRegular](SerpApi.md#processgoogleorganictaskgetregular)
- [processGoogleOrganicTaskPost](SerpApi.md#processgoogleorganictaskpost)
- [processGoogleOrganicTasksFixed](SerpApi.md#processgoogleorganictasksfixed)
- [processGoogleOrganicTasksReady](SerpApi.md#processgoogleorganictasksready)
- [processGoogleSearchByImageTaskGetAdvanced](SerpApi.md#processgooglesearchbyimagetaskgetadvanced)
- [processGoogleSearchByImageTaskPost](SerpApi.md#processgooglesearchbyimagetaskpost)
- [processGoogleSearchByImageTasksFixed](SerpApi.md#processgooglesearchbyimagetasksfixed)
- [processGoogleSearchByImageTasksReady](SerpApi.md#processgooglesearchbyimagetasksready)
- [processNaverOrganicTaskGetAdvanced](SerpApi.md#processnaverorganictaskgetadvanced)
- [processNaverOrganicTaskGetHtml](SerpApi.md#processnaverorganictaskgethtml)
- [processNaverOrganicTaskGetRegular](SerpApi.md#processnaverorganictaskgetregular)
- [processNaverOrganicTaskPost](SerpApi.md#processnaverorganictaskpost)
- [processNaverOrganicTasksFixed](SerpApi.md#processnaverorganictasksfixed)
- [processNaverOrganicTasksReady](SerpApi.md#processnaverorganictasksready)
- [processScreenshot](SerpApi.md#processscreenshot)
- [processSerpBaiduLanguages](SerpApi.md#processserpbaidulanguages)
- [processSerpBaiduLocations](SerpApi.md#processserpbaidulocations)
- [processSerpBaiduLocationsCountry](SerpApi.md#processserpbaidulocationscountry)
- [processSerpBingLanguages](SerpApi.md#processserpbinglanguages)
- [processSerpBingLocations](SerpApi.md#processserpbinglocations)
- [processSerpBingLocationsCountry](SerpApi.md#processserpbinglocationscountry)
- [processSerpErrors](SerpApi.md#processserperrors)
- [processSerpGoogleLanguages](SerpApi.md#processserpgooglelanguages)
- [processSerpGoogleLocations](SerpApi.md#processserpgooglelocations)
- [processSerpGoogleLocationsCountry](SerpApi.md#processserpgooglelocationscountry)
- [processSerpIdList](SerpApi.md#processserpidlist)
- [processSerpSeznamLanguages](SerpApi.md#processserpseznamlanguages)
- [processSerpSeznamLocations](SerpApi.md#processserpseznamlocations)
- [processSerpSeznamLocationsCountry](SerpApi.md#processserpseznamlocationscountry)
- [processSerpYahooLanguages](SerpApi.md#processserpyahoolanguages)
- [processSerpYahooLocations](SerpApi.md#processserpyahoolocations)
- [processSerpYahooLocationsCountry](SerpApi.md#processserpyahoolocationscountry)
- [processSerpYoutubeLanguages](SerpApi.md#processserpyoutubelanguages)
- [processSerpYoutubeLocations](SerpApi.md#processserpyoutubelocations)
- [processSerpYoutubeLocationsCountry](SerpApi.md#processserpyoutubelocationscountry)
- [processSeznamOrganicTaskGetAdvanced](SerpApi.md#processseznamorganictaskgetadvanced)
- [processSeznamOrganicTaskGetHtml](SerpApi.md#processseznamorganictaskgethtml)
- [processSeznamOrganicTaskGetRegular](SerpApi.md#processseznamorganictaskgetregular)
- [processSeznamOrganicTaskPost](SerpApi.md#processseznamorganictaskpost)
- [processSeznamOrganicTasksFixed](SerpApi.md#processseznamorganictasksfixed)
- [processSeznamOrganicTasksReady](SerpApi.md#processseznamorganictasksready)
- [processYahooOrganicLiveAdvanced](SerpApi.md#processyahooorganicliveadvanced)
- [processYahooOrganicLiveHtml](SerpApi.md#processyahooorganiclivehtml)
- [processYahooOrganicLiveRegular](SerpApi.md#processyahooorganicliveregular)
- [processYahooOrganicTaskGetAdvanced](SerpApi.md#processyahooorganictaskgetadvanced)
- [processYahooOrganicTaskGetHtml](SerpApi.md#processyahooorganictaskgethtml)
- [processYahooOrganicTaskGetRegular](SerpApi.md#processyahooorganictaskgetregular)
- [processYahooOrganicTaskPost](SerpApi.md#processyahooorganictaskpost)
- [processYahooOrganicTasksFixed](SerpApi.md#processyahooorganictasksfixed)
- [processYahooOrganicTasksReady](SerpApi.md#processyahooorganictasksready)
- [processYoutubeVideoCommentsLiveAdvanced](SerpApi.md#processyoutubevideocommentsliveadvanced)
- [processYoutubeVideoCommentsTaskGetAdvanced](SerpApi.md#processyoutubevideocommentstaskgetadvanced)
- [processYoutubeVideoCommentsTaskPost](SerpApi.md#processyoutubevideocommentstaskpost)
- [processYoutubeVideoCommentsTasksFixed](SerpApi.md#processyoutubevideocommentstasksfixed)
- [processYoutubeVideoCommentsTasksReady](SerpApi.md#processyoutubevideocommentstasksready)
- [processYoutubeVideoInfoLiveAdvanced](SerpApi.md#processyoutubevideoinfoliveadvanced)
- [processYoutubeVideoInfoTaskGetAdvanced](SerpApi.md#processyoutubevideoinfotaskgetadvanced)
- [processYoutubeVideoInfoTaskPost](SerpApi.md#processyoutubevideoinfotaskpost)
- [processYoutubeVideoInfoTasksFixed](SerpApi.md#processyoutubevideoinfotasksfixed)
- [processYoutubeVideoInfoTasksReady](SerpApi.md#processyoutubevideoinfotasksready)
- [processYoutubeVideoSubtitlesLiveAdvanced](SerpApi.md#processyoutubevideosubtitlesliveadvanced)
- [processYoutubeVideoSubtitlesTaskGetAdvanced](SerpApi.md#processyoutubevideosubtitlestaskgetadvanced)
- [processYoutubeVideoSubtitlesTaskPost](SerpApi.md#processyoutubevideosubtitlestaskpost)
- [processYoutubeVideoSubtitlesTasksFixed](SerpApi.md#processyoutubevideosubtitlestasksfixed)
- [processYoutubeVideoSubtitlesTasksReady](SerpApi.md#processyoutubevideosubtitlestasksready)
- [screenshot](SerpApi.md#screenshot)
- [serpBaiduLanguages](SerpApi.md#serpbaidulanguages)
- [serpBaiduLocations](SerpApi.md#serpbaidulocations)
- [serpBaiduLocationsCountry](SerpApi.md#serpbaidulocationscountry)
- [serpBingLanguages](SerpApi.md#serpbinglanguages)
- [serpBingLocations](SerpApi.md#serpbinglocations)
- [serpBingLocationsCountry](SerpApi.md#serpbinglocationscountry)
- [serpErrors](SerpApi.md#serperrors)
- [serpGoogleLanguages](SerpApi.md#serpgooglelanguages)
- [serpGoogleLocations](SerpApi.md#serpgooglelocations)
- [serpGoogleLocationsCountry](SerpApi.md#serpgooglelocationscountry)
- [serpIdList](SerpApi.md#serpidlist)
- [serpSeznamLanguages](SerpApi.md#serpseznamlanguages)
- [serpSeznamLocations](SerpApi.md#serpseznamlocations)
- [serpSeznamLocationsCountry](SerpApi.md#serpseznamlocationscountry)
- [serpYahooLanguages](SerpApi.md#serpyahoolanguages)
- [serpYahooLocations](SerpApi.md#serpyahoolocations)
- [serpYahooLocationsCountry](SerpApi.md#serpyahoolocationscountry)
- [serpYoutubeLanguages](SerpApi.md#serpyoutubelanguages)
- [serpYoutubeLocations](SerpApi.md#serpyoutubelocations)
- [serpYoutubeLocationsCountry](SerpApi.md#serpyoutubelocationscountry)
- [seznamOrganicTaskGetAdvanced](SerpApi.md#seznamorganictaskgetadvanced)
- [seznamOrganicTaskGetHtml](SerpApi.md#seznamorganictaskgethtml)
- [seznamOrganicTaskGetRegular](SerpApi.md#seznamorganictaskgetregular)
- [seznamOrganicTaskPost](SerpApi.md#seznamorganictaskpost)
- [seznamOrganicTasksFixed](SerpApi.md#seznamorganictasksfixed)
- [seznamOrganicTasksReady](SerpApi.md#seznamorganictasksready)
- [yahooOrganicLiveAdvanced](SerpApi.md#yahooorganicliveadvanced)
- [yahooOrganicLiveHtml](SerpApi.md#yahooorganiclivehtml)
- [yahooOrganicLiveRegular](SerpApi.md#yahooorganicliveregular)
- [yahooOrganicTaskGetAdvanced](SerpApi.md#yahooorganictaskgetadvanced)
- [yahooOrganicTaskGetHtml](SerpApi.md#yahooorganictaskgethtml)
- [yahooOrganicTaskGetRegular](SerpApi.md#yahooorganictaskgetregular)
- [yahooOrganicTaskPost](SerpApi.md#yahooorganictaskpost)
- [yahooOrganicTasksFixed](SerpApi.md#yahooorganictasksfixed)
- [yahooOrganicTasksReady](SerpApi.md#yahooorganictasksready)
- [youtubeVideoCommentsLiveAdvanced](SerpApi.md#youtubevideocommentsliveadvanced)
- [youtubeVideoCommentsTaskGetAdvanced](SerpApi.md#youtubevideocommentstaskgetadvanced)
- [youtubeVideoCommentsTaskPost](SerpApi.md#youtubevideocommentstaskpost)
- [youtubeVideoCommentsTasksFixed](SerpApi.md#youtubevideocommentstasksfixed)
- [youtubeVideoCommentsTasksReady](SerpApi.md#youtubevideocommentstasksready)
- [youtubeVideoInfoLiveAdvanced](SerpApi.md#youtubevideoinfoliveadvanced)
- [youtubeVideoInfoTaskGetAdvanced](SerpApi.md#youtubevideoinfotaskgetadvanced)
- [youtubeVideoInfoTaskPost](SerpApi.md#youtubevideoinfotaskpost)
- [youtubeVideoInfoTasksFixed](SerpApi.md#youtubevideoinfotasksfixed)
- [youtubeVideoInfoTasksReady](SerpApi.md#youtubevideoinfotasksready)
- [youtubeVideoSubtitlesLiveAdvanced](SerpApi.md#youtubevideosubtitlesliveadvanced)
- [youtubeVideoSubtitlesTaskGetAdvanced](SerpApi.md#youtubevideosubtitlestaskgetadvanced)
- [youtubeVideoSubtitlesTaskPost](SerpApi.md#youtubevideosubtitlestaskpost)
- [youtubeVideoSubtitlesTasksFixed](SerpApi.md#youtubevideosubtitlestasksfixed)
- [youtubeVideoSubtitlesTasksReady](SerpApi.md#youtubevideosubtitlestasksready)

## Constructors

### constructor

• **new SerpApi**(`baseUrl?`, `http?`): [`SerpApi`](SerpApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseUrl?` | `string` |
| `http?` | `Object` |
| `http.fetch` | (`url`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`\<`Response`\> |

#### Returns

[`SerpApi`](SerpApi.md)

#### Defined in

main.ts:16

## Properties

### baseUrl

• `Private` **baseUrl**: `string`

#### Defined in

main.ts:13

___

### http

• `Private` **http**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetch` | (`url`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`\<`Response`\> |

#### Defined in

main.ts:12

___

### jsonParseReviver

• `Protected` **jsonParseReviver**: (`key`: `string`, `value`: `any`) => `any` = `undefined`

#### Type declaration

▸ (`key`, `value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

##### Returns

`any`

#### Defined in

main.ts:14

## Methods

### aiSummary

▸ **aiSummary**(`body`): `Promise`\<[`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpAiSummaryRequestInfo`](SerpAiSummaryRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:151

___

### baiduOrganicTaskGetAdvanced

▸ **baiduOrganicTaskGetAdvanced**(`id`): `Promise`\<[`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4976

___

### baiduOrganicTaskGetHtml

▸ **baiduOrganicTaskGetHtml**(`id`): `Promise`\<[`SerpBaiduOrganicTaskGetHtmlResponseInfo`](SerpBaiduOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskGetHtmlResponseInfo`](SerpBaiduOrganicTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:5019

___

### baiduOrganicTaskGetRegular

▸ **baiduOrganicTaskGetRegular**(`id`): `Promise`\<[`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4933

___

### baiduOrganicTaskPost

▸ **baiduOrganicTaskPost**(`body`): `Promise`\<[`SerpBaiduOrganicTaskPostResponseInfo`](SerpBaiduOrganicTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpBaiduOrganicTaskPostRequestInfo`](SerpBaiduOrganicTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskPostResponseInfo`](SerpBaiduOrganicTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4815

___

### baiduOrganicTasksFixed

▸ **baiduOrganicTasksFixed**(): `Promise`\<[`SerpBaiduOrganicTasksFixedResponseInfo`](SerpBaiduOrganicTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBaiduOrganicTasksFixedResponseInfo`](SerpBaiduOrganicTasksFixedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4893

___

### baiduOrganicTasksReady

▸ **baiduOrganicTasksReady**(): `Promise`\<[`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4856

___

### bingLocalPackLiveHtml

▸ **bingLocalPackLiveHtml**(`body`): `Promise`\<[`SerpBingLocalPackLiveHtmlResponseInfo`](SerpBingLocalPackLiveHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpBingLocalPackLiveHtmlResponseInfo`](SerpBingLocalPackLiveHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3442

___

### bingLocalPackLiveRegular

▸ **bingLocalPackLiveRegular**(`body`): `Promise`\<[`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3400

___

### bingLocalPackTaskGetHtml

▸ **bingLocalPackTaskGetHtml**(`id`): `Promise`\<[`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3359

___

### bingLocalPackTaskGetRegular

▸ **bingLocalPackTaskGetRegular**(`id`): `Promise`\<[`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3316

___

### bingLocalPackTaskPost

▸ **bingLocalPackTaskPost**(`body`): `Promise`\<[`SerpBingLocalPackTaskPostResponseInfo`](SerpBingLocalPackTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpBingLocalPackTaskPostResponseInfo`](SerpBingLocalPackTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3198

___

### bingLocalPackTasksFixed

▸ **bingLocalPackTasksFixed**(): `Promise`\<[`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3276

___

### bingLocalPackTasksReady

▸ **bingLocalPackTasksReady**(): `Promise`\<[`SerpBingLocalPackTasksReadyResponseInfo`](SerpBingLocalPackTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBingLocalPackTasksReadyResponseInfo`](SerpBingLocalPackTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3239

___

### bingOrganicLiveAdvanced

▸ **bingOrganicLiveAdvanced**(`body`): `Promise`\<[`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3114

___

### bingOrganicLiveHtml

▸ **bingOrganicLiveHtml**(`body`): `Promise`\<[`SerpBingOrganicLiveHtmlResponseInfo`](SerpBingOrganicLiveHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpBingOrganicLiveHtmlResponseInfo`](SerpBingOrganicLiveHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3156

___

### bingOrganicLiveRegular

▸ **bingOrganicLiveRegular**(`body`): `Promise`\<[`SerpBingOrganicLiveRegularResponseInfo`](SerpBingOrganicLiveRegularResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpBingOrganicLiveRegularResponseInfo`](SerpBingOrganicLiveRegularResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3072

___

### bingOrganicTaskGetAdvanced

▸ **bingOrganicTaskGetAdvanced**(`id`): `Promise`\<[`SerpBingOrganicTaskGetAdvancedResponseInfo`](SerpBingOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpBingOrganicTaskGetAdvancedResponseInfo`](SerpBingOrganicTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2988

___

### bingOrganicTaskGetHtml

▸ **bingOrganicTaskGetHtml**(`id`): `Promise`\<[`SerpBingOrganicTaskGetHtmlResponseInfo`](SerpBingOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpBingOrganicTaskGetHtmlResponseInfo`](SerpBingOrganicTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3031

___

### bingOrganicTaskGetRegular

▸ **bingOrganicTaskGetRegular**(`id`): `Promise`\<[`SerpBingOrganicTaskGetRegularResponseInfo`](SerpBingOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpBingOrganicTaskGetRegularResponseInfo`](SerpBingOrganicTaskGetRegularResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2945

___

### bingOrganicTaskPost

▸ **bingOrganicTaskPost**(`body`): `Promise`\<[`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2827

___

### bingOrganicTasksFixed

▸ **bingOrganicTasksFixed**(): `Promise`\<[`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2905

___

### bingOrganicTasksReady

▸ **bingOrganicTasksReady**(): `Promise`\<[`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2868

___

### googleDatasetInfoLiveAdvanced

▸ **googleDatasetInfoLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2666

___

### googleDatasetInfoTaskGetAdvanced

▸ **googleDatasetInfoTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2625

___

### googleDatasetInfoTaskPost

▸ **googleDatasetInfoTaskPost**(`body`): `Promise`\<[`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpGoogleDatasetInfoTaskPostRequestInfo`](SerpGoogleDatasetInfoTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2507

___

### googleDatasetInfoTasksFixed

▸ **googleDatasetInfoTasksFixed**(): `Promise`\<[`SerpGoogleDatasetInfoTasksFixedResponseInfo`](SerpGoogleDatasetInfoTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTasksFixedResponseInfo`](SerpGoogleDatasetInfoTasksFixedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2585

___

### googleDatasetInfoTasksReady

▸ **googleDatasetInfoTasksReady**(): `Promise`\<[`SerpGoogleDatasetInfoTasksReadyResponseInfo`](SerpGoogleDatasetInfoTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTasksReadyResponseInfo`](SerpGoogleDatasetInfoTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2548

___

### googleDatasetSearchLiveAdvanced

▸ **googleDatasetSearchLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleDatasetSearchLiveAdvancedResponseInfo`](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchLiveAdvancedResponseInfo`](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2465

___

### googleDatasetSearchTaskGetAdvanced

▸ **googleDatasetSearchTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2424

___

### googleDatasetSearchTaskPost

▸ **googleDatasetSearchTaskPost**(`body`): `Promise`\<[`SerpGoogleDatasetSearchTaskPostResponseInfo`](SerpGoogleDatasetSearchTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpGoogleDatasetSearchTaskPostRequestInfo`](SerpGoogleDatasetSearchTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTaskPostResponseInfo`](SerpGoogleDatasetSearchTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2306

___

### googleDatasetSearchTasksFixed

▸ **googleDatasetSearchTasksFixed**(): `Promise`\<[`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2384

___

### googleDatasetSearchTasksReady

▸ **googleDatasetSearchTasksReady**(): `Promise`\<[`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2347

___

### googleEventsLiveAdvanced

▸ **googleEventsLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpGoogleEventsLiveAdvancedRequestInfo`](SerpGoogleEventsLiveAdvancedRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1617

___

### googleEventsTaskGetAdvanced

▸ **googleEventsTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1576

___

### googleEventsTaskPost

▸ **googleEventsTaskPost**(`body`): `Promise`\<[`SerpGoogleEventsTaskPostResponseInfo`](SerpGoogleEventsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpGoogleEventsTaskPostRequestInfo`](SerpGoogleEventsTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleEventsTaskPostResponseInfo`](SerpGoogleEventsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1458

___

### googleEventsTasksFixed

▸ **googleEventsTasksFixed**(): `Promise`\<[`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1536

___

### googleEventsTasksReady

▸ **googleEventsTasksReady**(): `Promise`\<[`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1499

___

### googleImagesLiveAdvanced

▸ **googleImagesLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1861

___

### googleImagesLiveHtml

▸ **googleImagesLiveHtml**(`body`): `Promise`\<[`SerpGoogleImagesLiveHtmlResponseInfo`](SerpGoogleImagesLiveHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleImagesLiveHtmlResponseInfo`](SerpGoogleImagesLiveHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1903

___

### googleImagesTaskGetAdvanced

▸ **googleImagesTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleImagesTaskGetAdvancedResponseInfo`](SerpGoogleImagesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpGoogleImagesTaskGetAdvancedResponseInfo`](SerpGoogleImagesTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1777

___

### googleImagesTaskGetHtml

▸ **googleImagesTaskGetHtml**(`id`): `Promise`\<[`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1820

___

### googleImagesTaskPost

▸ **googleImagesTaskPost**(`body`): `Promise`\<[`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1659

___

### googleImagesTasksFixed

▸ **googleImagesTasksFixed**(): `Promise`\<[`SerpGoogleImagesTasksFixedResponseInfo`](SerpGoogleImagesTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleImagesTasksFixedResponseInfo`](SerpGoogleImagesTasksFixedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1737

___

### googleImagesTasksReady

▸ **googleImagesTasksReady**(): `Promise`\<[`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1700

___

### googleJobsTaskGetAdvanced

▸ **googleJobsTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2222

___

### googleJobsTaskGetHtml

▸ **googleJobsTaskGetHtml**(`id`): `Promise`\<[`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2265

___

### googleJobsTaskPost

▸ **googleJobsTaskPost**(`body`): `Promise`\<[`SerpGoogleJobsTaskPostResponseInfo`](SerpGoogleJobsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpGoogleJobsTaskPostRequestInfo`](SerpGoogleJobsTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleJobsTaskPostResponseInfo`](SerpGoogleJobsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2104

___

### googleJobsTasksFixed

▸ **googleJobsTasksFixed**(): `Promise`\<[`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2182

___

### googleJobsTasksReady

▸ **googleJobsTasksReady**(): `Promise`\<[`SerpGoogleJobsTasksReadyResponseInfo`](SerpGoogleJobsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleJobsTasksReadyResponseInfo`](SerpGoogleJobsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2145

___

### googleLocalFinderLiveAdvanced

▸ **googleLocalFinderLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleLocalFinderLiveAdvancedResponseInfo`](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpGoogleLocalFinderLiveAdvancedRequestInfo`](SerpGoogleLocalFinderLiveAdvancedRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleLocalFinderLiveAdvancedResponseInfo`](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1088

___

### googleLocalFinderLiveHtml

▸ **googleLocalFinderLiveHtml**(`body`): `Promise`\<[`SerpGoogleLocalFinderLiveHtmlResponseInfo`](SerpGoogleLocalFinderLiveHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpGoogleLocalFinderLiveHtmlRequestInfo`](SerpGoogleLocalFinderLiveHtmlRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleLocalFinderLiveHtmlResponseInfo`](SerpGoogleLocalFinderLiveHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1130

___

### googleLocalFinderTaskGetAdvanced

▸ **googleLocalFinderTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](SerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier a universally unique identifier (UUID) unique task identifier in our system you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](SerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1004

___

### googleLocalFinderTaskGetHtml

▸ **googleLocalFinderTaskGetHtml**(`id`): `Promise`\<[`SerpGoogleLocalFinderTaskGetHtmlResponseInfo`](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTaskGetHtmlResponseInfo`](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1047

___

### googleLocalFinderTaskPost

▸ **googleLocalFinderTaskPost**(`body`): `Promise`\<[`SerpGoogleLocalFinderTaskPostResponseInfo`](SerpGoogleLocalFinderTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpGoogleLocalFinderTaskPostRequestInfo`](SerpGoogleLocalFinderTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTaskPostResponseInfo`](SerpGoogleLocalFinderTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:885

___

### googleLocalFinderTasksFixed

▸ **googleLocalFinderTasksFixed**(): `Promise`\<[`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:963

___

### googleLocalFinderTasksReady

▸ **googleLocalFinderTasksReady**(): `Promise`\<[`SerpGoogleLocalFinderTasksReadyResponseInfo`](SerpGoogleLocalFinderTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTasksReadyResponseInfo`](SerpGoogleLocalFinderTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:926

___

### googleMapsLiveAdvanced

▸ **googleMapsLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpGoogleMapsLiveAdvancedRequestInfo`](SerpGoogleMapsLiveAdvancedRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:843

___

### googleMapsTaskGetAdvanced

▸ **googleMapsTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleMapsTaskGetAdvancedResponseInfo`](SerpGoogleMapsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier a universally unique identifier (UUID) unique task identifier in our system you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpGoogleMapsTaskGetAdvancedResponseInfo`](SerpGoogleMapsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:802

___

### googleMapsTaskPost

▸ **googleMapsTaskPost**(`body`): `Promise`\<[`SerpGoogleMapsTaskPostResponseInfo`](SerpGoogleMapsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpGoogleMapsTaskPostRequestInfo`](SerpGoogleMapsTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleMapsTaskPostResponseInfo`](SerpGoogleMapsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:683

___

### googleMapsTasksFixed

▸ **googleMapsTasksFixed**(): `Promise`\<[`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:761

___

### googleMapsTasksReady

▸ **googleMapsTasksReady**(): `Promise`\<[`SerpGoogleMapsTasksReadyResponseInfo`](SerpGoogleMapsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleMapsTasksReadyResponseInfo`](SerpGoogleMapsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:724

___

### googleNewsLiveAdvanced

▸ **googleNewsLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1374

___

### googleNewsLiveHtml

▸ **googleNewsLiveHtml**(`body`): `Promise`\<[`SerpGoogleNewsLiveHtmlResponseInfo`](SerpGoogleNewsLiveHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleNewsLiveHtmlResponseInfo`](SerpGoogleNewsLiveHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1416

___

### googleNewsTaskGetAdvanced

▸ **googleNewsTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleNewsTaskGetAdvancedResponseInfo`](SerpGoogleNewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpGoogleNewsTaskGetAdvancedResponseInfo`](SerpGoogleNewsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1290

___

### googleNewsTaskGetHtml

▸ **googleNewsTaskGetHtml**(`id`): `Promise`\<[`SerpGoogleNewsTaskGetHtmlResponseInfo`](SerpGoogleNewsTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpGoogleNewsTaskGetHtmlResponseInfo`](SerpGoogleNewsTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1333

___

### googleNewsTaskPost

▸ **googleNewsTaskPost**(`body`): `Promise`\<[`SerpGoogleNewsTaskPostResponseInfo`](SerpGoogleNewsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleNewsTaskPostResponseInfo`](SerpGoogleNewsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1172

___

### googleNewsTasksFixed

▸ **googleNewsTasksFixed**(): `Promise`\<[`SerpGoogleNewsTasksFixedResponseInfo`](SerpGoogleNewsTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleNewsTasksFixedResponseInfo`](SerpGoogleNewsTasksFixedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1250

___

### googleNewsTasksReady

▸ **googleNewsTasksReady**(): `Promise`\<[`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1213

___

### googleOrganicLiveAdvanced

▸ **googleOrganicLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:599

___

### googleOrganicLiveHtml

▸ **googleOrganicLiveHtml**(`body`): `Promise`\<[`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:641

___

### googleOrganicLiveRegular

▸ **googleOrganicLiveRegular**(`body`): `Promise`\<[`SerpGoogleOrganicLiveRegularResponseInfo`](SerpGoogleOrganicLiveRegularResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleOrganicLiveRegularResponseInfo`](SerpGoogleOrganicLiveRegularResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:557

___

### googleOrganicTaskGetAdvanced

▸ **googleOrganicTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleOrganicTaskGetAdvancedResponseInfo`](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskGetAdvancedResponseInfo`](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:473

___

### googleOrganicTaskGetHtml

▸ **googleOrganicTaskGetHtml**(`id`): `Promise`\<[`SerpGoogleOrganicTaskGetHtmlResponseInfo`](SerpGoogleOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskGetHtmlResponseInfo`](SerpGoogleOrganicTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:516

___

### googleOrganicTaskGetRegular

▸ **googleOrganicTaskGetRegular**(`id`): `Promise`\<[`SerpGoogleOrganicTaskGetRegularResponseInfo`](SerpGoogleOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskGetRegularResponseInfo`](SerpGoogleOrganicTaskGetRegularResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:430

___

### googleOrganicTaskPost

▸ **googleOrganicTaskPost**(`body`): `Promise`\<[`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:312

___

### googleOrganicTasksFixed

▸ **googleOrganicTasksFixed**(): `Promise`\<[`SerpGoogleOrganicTasksFixedResponseInfo`](SerpGoogleOrganicTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleOrganicTasksFixedResponseInfo`](SerpGoogleOrganicTasksFixedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:390

___

### googleOrganicTasksReady

▸ **googleOrganicTasksReady**(): `Promise`\<[`SerpGoogleOrganicTasksReadyResponseInfo`](SerpGoogleOrganicTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleOrganicTasksReadyResponseInfo`](SerpGoogleOrganicTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:353

___

### googleSearchByImageTaskGetAdvanced

▸ **googleSearchByImageTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2063

___

### googleSearchByImageTaskPost

▸ **googleSearchByImageTaskPost**(`body`): `Promise`\<[`SerpGoogleSearchByImageTaskPostResponseInfo`](SerpGoogleSearchByImageTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpGoogleSearchByImageTaskPostRequestInfo`](SerpGoogleSearchByImageTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTaskPostResponseInfo`](SerpGoogleSearchByImageTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1945

___

### googleSearchByImageTasksFixed

▸ **googleSearchByImageTasksFixed**(): `Promise`\<[`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2023

___

### googleSearchByImageTasksReady

▸ **googleSearchByImageTasksReady**(): `Promise`\<[`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:1986

___

### naverOrganicTaskGetAdvanced

▸ **naverOrganicTaskGetAdvanced**(`id`): `Promise`\<[`SerpNaverOrganicTaskGetAdvancedResponseInfo`](SerpNaverOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpNaverOrganicTaskGetAdvancedResponseInfo`](SerpNaverOrganicTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:5221

___

### naverOrganicTaskGetHtml

▸ **naverOrganicTaskGetHtml**(`id`): `Promise`\<[`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:5264

___

### naverOrganicTaskGetRegular

▸ **naverOrganicTaskGetRegular**(`id`): `Promise`\<[`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:5178

___

### naverOrganicTaskPost

▸ **naverOrganicTaskPost**(`body`): `Promise`\<[`SerpNaverOrganicTaskPostResponseInfo`](SerpNaverOrganicTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpNaverOrganicTaskPostResponseInfo`](SerpNaverOrganicTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:5060

___

### naverOrganicTasksFixed

▸ **naverOrganicTasksFixed**(): `Promise`\<[`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:5138

___

### naverOrganicTasksReady

▸ **naverOrganicTasksReady**(): `Promise`\<[`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:5101

___

### processAiSummary

▸ **processAiSummary**(`response`): `Promise`\<[`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)\>

#### Defined in

main.ts:171

___

### processBaiduOrganicTaskGetAdvanced

▸ **processBaiduOrganicTaskGetAdvanced**(`response`): `Promise`\<[`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:4995

___

### processBaiduOrganicTaskGetHtml

▸ **processBaiduOrganicTaskGetHtml**(`response`): `Promise`\<[`SerpBaiduOrganicTaskGetHtmlResponseInfo`](SerpBaiduOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskGetHtmlResponseInfo`](SerpBaiduOrganicTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:5038

___

### processBaiduOrganicTaskGetRegular

▸ **processBaiduOrganicTaskGetRegular**(`response`): `Promise`\<[`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)\>

#### Defined in

main.ts:4952

___

### processBaiduOrganicTaskPost

▸ **processBaiduOrganicTaskPost**(`response`): `Promise`\<[`SerpBaiduOrganicTaskPostResponseInfo`](SerpBaiduOrganicTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskPostResponseInfo`](SerpBaiduOrganicTaskPostResponseInfo.md)\>

#### Defined in

main.ts:4835

___

### processBaiduOrganicTasksFixed

▸ **processBaiduOrganicTasksFixed**(`response`): `Promise`\<[`SerpBaiduOrganicTasksFixedResponseInfo`](SerpBaiduOrganicTasksFixedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBaiduOrganicTasksFixedResponseInfo`](SerpBaiduOrganicTasksFixedResponseInfo.md)\>

#### Defined in

main.ts:4909

___

### processBaiduOrganicTasksReady

▸ **processBaiduOrganicTasksReady**(`response`): `Promise`\<[`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:4872

___

### processBingLocalPackLiveHtml

▸ **processBingLocalPackLiveHtml**(`response`): `Promise`\<[`SerpBingLocalPackLiveHtmlResponseInfo`](SerpBingLocalPackLiveHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBingLocalPackLiveHtmlResponseInfo`](SerpBingLocalPackLiveHtmlResponseInfo.md)\>

#### Defined in

main.ts:3462

___

### processBingLocalPackLiveRegular

▸ **processBingLocalPackLiveRegular**(`response`): `Promise`\<[`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)\>

#### Defined in

main.ts:3420

___

### processBingLocalPackTaskGetHtml

▸ **processBingLocalPackTaskGetHtml**(`response`): `Promise`\<[`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:3378

___

### processBingLocalPackTaskGetRegular

▸ **processBingLocalPackTaskGetRegular**(`response`): `Promise`\<[`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)\>

#### Defined in

main.ts:3335

___

### processBingLocalPackTaskPost

▸ **processBingLocalPackTaskPost**(`response`): `Promise`\<[`SerpBingLocalPackTaskPostResponseInfo`](SerpBingLocalPackTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBingLocalPackTaskPostResponseInfo`](SerpBingLocalPackTaskPostResponseInfo.md)\>

#### Defined in

main.ts:3218

___

### processBingLocalPackTasksFixed

▸ **processBingLocalPackTasksFixed**(`response`): `Promise`\<[`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)\>

#### Defined in

main.ts:3292

___

### processBingLocalPackTasksReady

▸ **processBingLocalPackTasksReady**(`response`): `Promise`\<[`SerpBingLocalPackTasksReadyResponseInfo`](SerpBingLocalPackTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBingLocalPackTasksReadyResponseInfo`](SerpBingLocalPackTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:3255

___

### processBingOrganicLiveAdvanced

▸ **processBingOrganicLiveAdvanced**(`response`): `Promise`\<[`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)\>

#### Defined in

main.ts:3134

___

### processBingOrganicLiveHtml

▸ **processBingOrganicLiveHtml**(`response`): `Promise`\<[`SerpBingOrganicLiveHtmlResponseInfo`](SerpBingOrganicLiveHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBingOrganicLiveHtmlResponseInfo`](SerpBingOrganicLiveHtmlResponseInfo.md)\>

#### Defined in

main.ts:3176

___

### processBingOrganicLiveRegular

▸ **processBingOrganicLiveRegular**(`response`): `Promise`\<[`SerpBingOrganicLiveRegularResponseInfo`](SerpBingOrganicLiveRegularResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBingOrganicLiveRegularResponseInfo`](SerpBingOrganicLiveRegularResponseInfo.md)\>

#### Defined in

main.ts:3092

___

### processBingOrganicTaskGetAdvanced

▸ **processBingOrganicTaskGetAdvanced**(`response`): `Promise`\<[`SerpBingOrganicTaskGetAdvancedResponseInfo`](SerpBingOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBingOrganicTaskGetAdvancedResponseInfo`](SerpBingOrganicTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:3007

___

### processBingOrganicTaskGetHtml

▸ **processBingOrganicTaskGetHtml**(`response`): `Promise`\<[`SerpBingOrganicTaskGetHtmlResponseInfo`](SerpBingOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBingOrganicTaskGetHtmlResponseInfo`](SerpBingOrganicTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:3050

___

### processBingOrganicTaskGetRegular

▸ **processBingOrganicTaskGetRegular**(`response`): `Promise`\<[`SerpBingOrganicTaskGetRegularResponseInfo`](SerpBingOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBingOrganicTaskGetRegularResponseInfo`](SerpBingOrganicTaskGetRegularResponseInfo.md)\>

#### Defined in

main.ts:2964

___

### processBingOrganicTaskPost

▸ **processBingOrganicTaskPost**(`response`): `Promise`\<[`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)\>

#### Defined in

main.ts:2847

___

### processBingOrganicTasksFixed

▸ **processBingOrganicTasksFixed**(`response`): `Promise`\<[`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)\>

#### Defined in

main.ts:2921

___

### processBingOrganicTasksReady

▸ **processBingOrganicTasksReady**(`response`): `Promise`\<[`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:2884

___

### processGoogleDatasetInfoLiveAdvanced

▸ **processGoogleDatasetInfoLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)\>

#### Defined in

main.ts:2686

___

### processGoogleDatasetInfoTaskGetAdvanced

▸ **processGoogleDatasetInfoTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:2644

___

### processGoogleDatasetInfoTaskPost

▸ **processGoogleDatasetInfoTaskPost**(`response`): `Promise`\<[`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)\>

#### Defined in

main.ts:2527

___

### processGoogleDatasetInfoTasksFixed

▸ **processGoogleDatasetInfoTasksFixed**(`response`): `Promise`\<[`SerpGoogleDatasetInfoTasksFixedResponseInfo`](SerpGoogleDatasetInfoTasksFixedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTasksFixedResponseInfo`](SerpGoogleDatasetInfoTasksFixedResponseInfo.md)\>

#### Defined in

main.ts:2601

___

### processGoogleDatasetInfoTasksReady

▸ **processGoogleDatasetInfoTasksReady**(`response`): `Promise`\<[`SerpGoogleDatasetInfoTasksReadyResponseInfo`](SerpGoogleDatasetInfoTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTasksReadyResponseInfo`](SerpGoogleDatasetInfoTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:2564

___

### processGoogleDatasetSearchLiveAdvanced

▸ **processGoogleDatasetSearchLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleDatasetSearchLiveAdvancedResponseInfo`](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchLiveAdvancedResponseInfo`](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md)\>

#### Defined in

main.ts:2485

___

### processGoogleDatasetSearchTaskGetAdvanced

▸ **processGoogleDatasetSearchTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:2443

___

### processGoogleDatasetSearchTaskPost

▸ **processGoogleDatasetSearchTaskPost**(`response`): `Promise`\<[`SerpGoogleDatasetSearchTaskPostResponseInfo`](SerpGoogleDatasetSearchTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTaskPostResponseInfo`](SerpGoogleDatasetSearchTaskPostResponseInfo.md)\>

#### Defined in

main.ts:2326

___

### processGoogleDatasetSearchTasksFixed

▸ **processGoogleDatasetSearchTasksFixed**(`response`): `Promise`\<[`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)\>

#### Defined in

main.ts:2400

___

### processGoogleDatasetSearchTasksReady

▸ **processGoogleDatasetSearchTasksReady**(`response`): `Promise`\<[`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:2363

___

### processGoogleEventsLiveAdvanced

▸ **processGoogleEventsLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)\>

#### Defined in

main.ts:1637

___

### processGoogleEventsTaskGetAdvanced

▸ **processGoogleEventsTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:1595

___

### processGoogleEventsTaskPost

▸ **processGoogleEventsTaskPost**(`response`): `Promise`\<[`SerpGoogleEventsTaskPostResponseInfo`](SerpGoogleEventsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleEventsTaskPostResponseInfo`](SerpGoogleEventsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:1478

___

### processGoogleEventsTasksFixed

▸ **processGoogleEventsTasksFixed**(`response`): `Promise`\<[`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)\>

#### Defined in

main.ts:1552

___

### processGoogleEventsTasksReady

▸ **processGoogleEventsTasksReady**(`response`): `Promise`\<[`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:1515

___

### processGoogleImagesLiveAdvanced

▸ **processGoogleImagesLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)\>

#### Defined in

main.ts:1881

___

### processGoogleImagesLiveHtml

▸ **processGoogleImagesLiveHtml**(`response`): `Promise`\<[`SerpGoogleImagesLiveHtmlResponseInfo`](SerpGoogleImagesLiveHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleImagesLiveHtmlResponseInfo`](SerpGoogleImagesLiveHtmlResponseInfo.md)\>

#### Defined in

main.ts:1923

___

### processGoogleImagesTaskGetAdvanced

▸ **processGoogleImagesTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleImagesTaskGetAdvancedResponseInfo`](SerpGoogleImagesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleImagesTaskGetAdvancedResponseInfo`](SerpGoogleImagesTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:1796

___

### processGoogleImagesTaskGetHtml

▸ **processGoogleImagesTaskGetHtml**(`response`): `Promise`\<[`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:1839

___

### processGoogleImagesTaskPost

▸ **processGoogleImagesTaskPost**(`response`): `Promise`\<[`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)\>

#### Defined in

main.ts:1679

___

### processGoogleImagesTasksFixed

▸ **processGoogleImagesTasksFixed**(`response`): `Promise`\<[`SerpGoogleImagesTasksFixedResponseInfo`](SerpGoogleImagesTasksFixedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleImagesTasksFixedResponseInfo`](SerpGoogleImagesTasksFixedResponseInfo.md)\>

#### Defined in

main.ts:1753

___

### processGoogleImagesTasksReady

▸ **processGoogleImagesTasksReady**(`response`): `Promise`\<[`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:1716

___

### processGoogleJobsTaskGetAdvanced

▸ **processGoogleJobsTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:2241

___

### processGoogleJobsTaskGetHtml

▸ **processGoogleJobsTaskGetHtml**(`response`): `Promise`\<[`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:2284

___

### processGoogleJobsTaskPost

▸ **processGoogleJobsTaskPost**(`response`): `Promise`\<[`SerpGoogleJobsTaskPostResponseInfo`](SerpGoogleJobsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleJobsTaskPostResponseInfo`](SerpGoogleJobsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:2124

___

### processGoogleJobsTasksFixed

▸ **processGoogleJobsTasksFixed**(`response`): `Promise`\<[`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)\>

#### Defined in

main.ts:2198

___

### processGoogleJobsTasksReady

▸ **processGoogleJobsTasksReady**(`response`): `Promise`\<[`SerpGoogleJobsTasksReadyResponseInfo`](SerpGoogleJobsTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleJobsTasksReadyResponseInfo`](SerpGoogleJobsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:2161

___

### processGoogleLocalFinderLiveAdvanced

▸ **processGoogleLocalFinderLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleLocalFinderLiveAdvancedResponseInfo`](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleLocalFinderLiveAdvancedResponseInfo`](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md)\>

#### Defined in

main.ts:1108

___

### processGoogleLocalFinderLiveHtml

▸ **processGoogleLocalFinderLiveHtml**(`response`): `Promise`\<[`SerpGoogleLocalFinderLiveHtmlResponseInfo`](SerpGoogleLocalFinderLiveHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleLocalFinderLiveHtmlResponseInfo`](SerpGoogleLocalFinderLiveHtmlResponseInfo.md)\>

#### Defined in

main.ts:1150

___

### processGoogleLocalFinderTaskGetAdvanced

▸ **processGoogleLocalFinderTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](SerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](SerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:1023

___

### processGoogleLocalFinderTaskGetHtml

▸ **processGoogleLocalFinderTaskGetHtml**(`response`): `Promise`\<[`SerpGoogleLocalFinderTaskGetHtmlResponseInfo`](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTaskGetHtmlResponseInfo`](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:1066

___

### processGoogleLocalFinderTaskPost

▸ **processGoogleLocalFinderTaskPost**(`response`): `Promise`\<[`SerpGoogleLocalFinderTaskPostResponseInfo`](SerpGoogleLocalFinderTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTaskPostResponseInfo`](SerpGoogleLocalFinderTaskPostResponseInfo.md)\>

#### Defined in

main.ts:905

___

### processGoogleLocalFinderTasksFixed

▸ **processGoogleLocalFinderTasksFixed**(`response`): `Promise`\<[`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)\>

#### Defined in

main.ts:979

___

### processGoogleLocalFinderTasksReady

▸ **processGoogleLocalFinderTasksReady**(`response`): `Promise`\<[`SerpGoogleLocalFinderTasksReadyResponseInfo`](SerpGoogleLocalFinderTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTasksReadyResponseInfo`](SerpGoogleLocalFinderTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:942

___

### processGoogleMapsLiveAdvanced

▸ **processGoogleMapsLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)\>

#### Defined in

main.ts:863

___

### processGoogleMapsTaskGetAdvanced

▸ **processGoogleMapsTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleMapsTaskGetAdvancedResponseInfo`](SerpGoogleMapsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleMapsTaskGetAdvancedResponseInfo`](SerpGoogleMapsTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:821

___

### processGoogleMapsTaskPost

▸ **processGoogleMapsTaskPost**(`response`): `Promise`\<[`SerpGoogleMapsTaskPostResponseInfo`](SerpGoogleMapsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleMapsTaskPostResponseInfo`](SerpGoogleMapsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:703

___

### processGoogleMapsTasksFixed

▸ **processGoogleMapsTasksFixed**(`response`): `Promise`\<[`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)\>

#### Defined in

main.ts:777

___

### processGoogleMapsTasksReady

▸ **processGoogleMapsTasksReady**(`response`): `Promise`\<[`SerpGoogleMapsTasksReadyResponseInfo`](SerpGoogleMapsTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleMapsTasksReadyResponseInfo`](SerpGoogleMapsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:740

___

### processGoogleNewsLiveAdvanced

▸ **processGoogleNewsLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)\>

#### Defined in

main.ts:1394

___

### processGoogleNewsLiveHtml

▸ **processGoogleNewsLiveHtml**(`response`): `Promise`\<[`SerpGoogleNewsLiveHtmlResponseInfo`](SerpGoogleNewsLiveHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleNewsLiveHtmlResponseInfo`](SerpGoogleNewsLiveHtmlResponseInfo.md)\>

#### Defined in

main.ts:1436

___

### processGoogleNewsTaskGetAdvanced

▸ **processGoogleNewsTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleNewsTaskGetAdvancedResponseInfo`](SerpGoogleNewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleNewsTaskGetAdvancedResponseInfo`](SerpGoogleNewsTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:1309

___

### processGoogleNewsTaskGetHtml

▸ **processGoogleNewsTaskGetHtml**(`response`): `Promise`\<[`SerpGoogleNewsTaskGetHtmlResponseInfo`](SerpGoogleNewsTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleNewsTaskGetHtmlResponseInfo`](SerpGoogleNewsTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:1352

___

### processGoogleNewsTaskPost

▸ **processGoogleNewsTaskPost**(`response`): `Promise`\<[`SerpGoogleNewsTaskPostResponseInfo`](SerpGoogleNewsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleNewsTaskPostResponseInfo`](SerpGoogleNewsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:1192

___

### processGoogleNewsTasksFixed

▸ **processGoogleNewsTasksFixed**(`response`): `Promise`\<[`SerpGoogleNewsTasksFixedResponseInfo`](SerpGoogleNewsTasksFixedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleNewsTasksFixedResponseInfo`](SerpGoogleNewsTasksFixedResponseInfo.md)\>

#### Defined in

main.ts:1266

___

### processGoogleNewsTasksReady

▸ **processGoogleNewsTasksReady**(`response`): `Promise`\<[`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:1229

___

### processGoogleOrganicLiveAdvanced

▸ **processGoogleOrganicLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)\>

#### Defined in

main.ts:619

___

### processGoogleOrganicLiveHtml

▸ **processGoogleOrganicLiveHtml**(`response`): `Promise`\<[`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)\>

#### Defined in

main.ts:661

___

### processGoogleOrganicLiveRegular

▸ **processGoogleOrganicLiveRegular**(`response`): `Promise`\<[`SerpGoogleOrganicLiveRegularResponseInfo`](SerpGoogleOrganicLiveRegularResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleOrganicLiveRegularResponseInfo`](SerpGoogleOrganicLiveRegularResponseInfo.md)\>

#### Defined in

main.ts:577

___

### processGoogleOrganicTaskGetAdvanced

▸ **processGoogleOrganicTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleOrganicTaskGetAdvancedResponseInfo`](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskGetAdvancedResponseInfo`](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:492

___

### processGoogleOrganicTaskGetHtml

▸ **processGoogleOrganicTaskGetHtml**(`response`): `Promise`\<[`SerpGoogleOrganicTaskGetHtmlResponseInfo`](SerpGoogleOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskGetHtmlResponseInfo`](SerpGoogleOrganicTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:535

___

### processGoogleOrganicTaskGetRegular

▸ **processGoogleOrganicTaskGetRegular**(`response`): `Promise`\<[`SerpGoogleOrganicTaskGetRegularResponseInfo`](SerpGoogleOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskGetRegularResponseInfo`](SerpGoogleOrganicTaskGetRegularResponseInfo.md)\>

#### Defined in

main.ts:449

___

### processGoogleOrganicTaskPost

▸ **processGoogleOrganicTaskPost**(`response`): `Promise`\<[`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)\>

#### Defined in

main.ts:332

___

### processGoogleOrganicTasksFixed

▸ **processGoogleOrganicTasksFixed**(`response`): `Promise`\<[`SerpGoogleOrganicTasksFixedResponseInfo`](SerpGoogleOrganicTasksFixedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleOrganicTasksFixedResponseInfo`](SerpGoogleOrganicTasksFixedResponseInfo.md)\>

#### Defined in

main.ts:406

___

### processGoogleOrganicTasksReady

▸ **processGoogleOrganicTasksReady**(`response`): `Promise`\<[`SerpGoogleOrganicTasksReadyResponseInfo`](SerpGoogleOrganicTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleOrganicTasksReadyResponseInfo`](SerpGoogleOrganicTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:369

___

### processGoogleSearchByImageTaskGetAdvanced

▸ **processGoogleSearchByImageTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:2082

___

### processGoogleSearchByImageTaskPost

▸ **processGoogleSearchByImageTaskPost**(`response`): `Promise`\<[`SerpGoogleSearchByImageTaskPostResponseInfo`](SerpGoogleSearchByImageTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTaskPostResponseInfo`](SerpGoogleSearchByImageTaskPostResponseInfo.md)\>

#### Defined in

main.ts:1965

___

### processGoogleSearchByImageTasksFixed

▸ **processGoogleSearchByImageTasksFixed**(`response`): `Promise`\<[`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)\>

#### Defined in

main.ts:2039

___

### processGoogleSearchByImageTasksReady

▸ **processGoogleSearchByImageTasksReady**(`response`): `Promise`\<[`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:2002

___

### processNaverOrganicTaskGetAdvanced

▸ **processNaverOrganicTaskGetAdvanced**(`response`): `Promise`\<[`SerpNaverOrganicTaskGetAdvancedResponseInfo`](SerpNaverOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpNaverOrganicTaskGetAdvancedResponseInfo`](SerpNaverOrganicTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:5240

___

### processNaverOrganicTaskGetHtml

▸ **processNaverOrganicTaskGetHtml**(`response`): `Promise`\<[`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:5283

___

### processNaverOrganicTaskGetRegular

▸ **processNaverOrganicTaskGetRegular**(`response`): `Promise`\<[`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)\>

#### Defined in

main.ts:5197

___

### processNaverOrganicTaskPost

▸ **processNaverOrganicTaskPost**(`response`): `Promise`\<[`SerpNaverOrganicTaskPostResponseInfo`](SerpNaverOrganicTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpNaverOrganicTaskPostResponseInfo`](SerpNaverOrganicTaskPostResponseInfo.md)\>

#### Defined in

main.ts:5080

___

### processNaverOrganicTasksFixed

▸ **processNaverOrganicTasksFixed**(`response`): `Promise`\<[`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)\>

#### Defined in

main.ts:5154

___

### processNaverOrganicTasksReady

▸ **processNaverOrganicTasksReady**(`response`): `Promise`\<[`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:5117

___

### processScreenshot

▸ **processScreenshot**(`response`): `Promise`\<[`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)\>

#### Defined in

main.ts:129

___

### processSerpBaiduLanguages

▸ **processSerpBaiduLanguages**(`response`): `Promise`\<[`SerpBaiduLanguagesResponseInfo`](SerpBaiduLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBaiduLanguagesResponseInfo`](SerpBaiduLanguagesResponseInfo.md)\>

#### Defined in

main.ts:4793

___

### processSerpBaiduLocations

▸ **processSerpBaiduLocations**(`response`): `Promise`\<[`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)\>

#### Defined in

main.ts:4711

___

### processSerpBaiduLocationsCountry

▸ **processSerpBaiduLocationsCountry**(`response`): `Promise`\<[`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)\>

#### Defined in

main.ts:4756

___

### processSerpBingLanguages

▸ **processSerpBingLanguages**(`response`): `Promise`\<[`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)\>

#### Defined in

main.ts:2805

___

### processSerpBingLocations

▸ **processSerpBingLocations**(`response`): `Promise`\<[`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)\>

#### Defined in

main.ts:2723

___

### processSerpBingLocationsCountry

▸ **processSerpBingLocationsCountry**(`response`): `Promise`\<[`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)\>

#### Defined in

main.ts:2768

___

### processSerpErrors

▸ **processSerpErrors**(`response`): `Promise`\<[`SerpErrorsResponseInfo`](SerpErrorsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpErrorsResponseInfo`](SerpErrorsResponseInfo.md)\>

#### Defined in

main.ts:87

___

### processSerpGoogleLanguages

▸ **processSerpGoogleLanguages**(`response`): `Promise`\<[`SerpGoogleLanguagesResponseInfo`](SerpGoogleLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleLanguagesResponseInfo`](SerpGoogleLanguagesResponseInfo.md)\>

#### Defined in

main.ts:290

___

### processSerpGoogleLocations

▸ **processSerpGoogleLocations**(`response`): `Promise`\<[`SerpGoogleLocationsResponseInfo`](SerpGoogleLocationsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleLocationsResponseInfo`](SerpGoogleLocationsResponseInfo.md)\>

#### Defined in

main.ts:208

___

### processSerpGoogleLocationsCountry

▸ **processSerpGoogleLocationsCountry**(`response`): `Promise`\<[`SerpGoogleLocationsCountryResponseInfo`](SerpGoogleLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpGoogleLocationsCountryResponseInfo`](SerpGoogleLocationsCountryResponseInfo.md)\>

#### Defined in

main.ts:253

___

### processSerpIdList

▸ **processSerpIdList**(`response`): `Promise`\<[`SerpIdListResponseInfo`](SerpIdListResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpIdListResponseInfo`](SerpIdListResponseInfo.md)\>

#### Defined in

main.ts:45

___

### processSerpSeznamLanguages

▸ **processSerpSeznamLanguages**(`response`): `Promise`\<[`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)\>

#### Defined in

main.ts:5402

___

### processSerpSeznamLocations

▸ **processSerpSeznamLocations**(`response`): `Promise`\<[`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)\>

#### Defined in

main.ts:5320

___

### processSerpSeznamLocationsCountry

▸ **processSerpSeznamLocationsCountry**(`response`): `Promise`\<[`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)\>

#### Defined in

main.ts:5365

___

### processSerpYahooLanguages

▸ **processSerpYahooLanguages**(`response`): `Promise`\<[`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)\>

#### Defined in

main.ts:4303

___

### processSerpYahooLocations

▸ **processSerpYahooLocations**(`response`): `Promise`\<[`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)\>

#### Defined in

main.ts:4221

___

### processSerpYahooLocationsCountry

▸ **processSerpYahooLocationsCountry**(`response`): `Promise`\<[`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)\>

#### Defined in

main.ts:4266

___

### processSerpYoutubeLanguages

▸ **processSerpYoutubeLanguages**(`response`): `Promise`\<[`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)\>

#### Defined in

main.ts:3581

___

### processSerpYoutubeLocations

▸ **processSerpYoutubeLocations**(`response`): `Promise`\<[`SerpYoutubeLocationsResponseInfo`](SerpYoutubeLocationsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYoutubeLocationsResponseInfo`](SerpYoutubeLocationsResponseInfo.md)\>

#### Defined in

main.ts:3499

___

### processSerpYoutubeLocationsCountry

▸ **processSerpYoutubeLocationsCountry**(`response`): `Promise`\<[`SerpYoutubeLocationsCountryResponseInfo`](SerpYoutubeLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYoutubeLocationsCountryResponseInfo`](SerpYoutubeLocationsCountryResponseInfo.md)\>

#### Defined in

main.ts:3544

___

### processSeznamOrganicTaskGetAdvanced

▸ **processSeznamOrganicTaskGetAdvanced**(`response`): `Promise`\<[`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:5604

___

### processSeznamOrganicTaskGetHtml

▸ **processSeznamOrganicTaskGetHtml**(`response`): `Promise`\<[`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:5647

___

### processSeznamOrganicTaskGetRegular

▸ **processSeznamOrganicTaskGetRegular**(`response`): `Promise`\<[`SerpSeznamOrganicTaskGetRegularResponseInfo`](SerpSeznamOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskGetRegularResponseInfo`](SerpSeznamOrganicTaskGetRegularResponseInfo.md)\>

#### Defined in

main.ts:5561

___

### processSeznamOrganicTaskPost

▸ **processSeznamOrganicTaskPost**(`response`): `Promise`\<[`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)\>

#### Defined in

main.ts:5444

___

### processSeznamOrganicTasksFixed

▸ **processSeznamOrganicTasksFixed**(`response`): `Promise`\<[`SerpSeznamOrganicTasksFixedResponseInfo`](SerpSeznamOrganicTasksFixedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpSeznamOrganicTasksFixedResponseInfo`](SerpSeznamOrganicTasksFixedResponseInfo.md)\>

#### Defined in

main.ts:5518

___

### processSeznamOrganicTasksReady

▸ **processSeznamOrganicTasksReady**(`response`): `Promise`\<[`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:5481

___

### processYahooOrganicLiveAdvanced

▸ **processYahooOrganicLiveAdvanced**(`response`): `Promise`\<[`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)\>

#### Defined in

main.ts:4632

___

### processYahooOrganicLiveHtml

▸ **processYahooOrganicLiveHtml**(`response`): `Promise`\<[`SerpYahooOrganicLiveHtmlResponseInfo`](SerpYahooOrganicLiveHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYahooOrganicLiveHtmlResponseInfo`](SerpYahooOrganicLiveHtmlResponseInfo.md)\>

#### Defined in

main.ts:4674

___

### processYahooOrganicLiveRegular

▸ **processYahooOrganicLiveRegular**(`response`): `Promise`\<[`SerpYahooOrganicLiveRegularResponseInfo`](SerpYahooOrganicLiveRegularResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYahooOrganicLiveRegularResponseInfo`](SerpYahooOrganicLiveRegularResponseInfo.md)\>

#### Defined in

main.ts:4590

___

### processYahooOrganicTaskGetAdvanced

▸ **processYahooOrganicTaskGetAdvanced**(`response`): `Promise`\<[`SerpYahooOrganicTaskGetAdvancedResponseInfo`](SerpYahooOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYahooOrganicTaskGetAdvancedResponseInfo`](SerpYahooOrganicTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:4505

___

### processYahooOrganicTaskGetHtml

▸ **processYahooOrganicTaskGetHtml**(`response`): `Promise`\<[`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:4548

___

### processYahooOrganicTaskGetRegular

▸ **processYahooOrganicTaskGetRegular**(`response`): `Promise`\<[`SerpYahooOrganicTaskGetRegularResponseInfo`](SerpYahooOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYahooOrganicTaskGetRegularResponseInfo`](SerpYahooOrganicTaskGetRegularResponseInfo.md)\>

#### Defined in

main.ts:4462

___

### processYahooOrganicTaskPost

▸ **processYahooOrganicTaskPost**(`response`): `Promise`\<[`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)\>

#### Defined in

main.ts:4345

___

### processYahooOrganicTasksFixed

▸ **processYahooOrganicTasksFixed**(`response`): `Promise`\<[`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)\>

#### Defined in

main.ts:4419

___

### processYahooOrganicTasksReady

▸ **processYahooOrganicTasksReady**(`response`): `Promise`\<[`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:4382

___

### processYoutubeVideoCommentsLiveAdvanced

▸ **processYoutubeVideoCommentsLiveAdvanced**(`response`): `Promise`\<[`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)\>

#### Defined in

main.ts:4184

___

### processYoutubeVideoCommentsTaskGetAdvanced

▸ **processYoutubeVideoCommentsTaskGetAdvanced**(`response`): `Promise`\<[`SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:4142

___

### processYoutubeVideoCommentsTaskPost

▸ **processYoutubeVideoCommentsTaskPost**(`response`): `Promise`\<[`SerpYoutubeVideoCommentsTaskPostResponseInfo`](SerpYoutubeVideoCommentsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTaskPostResponseInfo`](SerpYoutubeVideoCommentsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:4025

___

### processYoutubeVideoCommentsTasksFixed

▸ **processYoutubeVideoCommentsTasksFixed**(`response`): `Promise`\<[`SerpYoutubeVideoCommentsTasksFixedResponseInfo`](SerpYoutubeVideoCommentsTasksFixedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTasksFixedResponseInfo`](SerpYoutubeVideoCommentsTasksFixedResponseInfo.md)\>

#### Defined in

main.ts:4099

___

### processYoutubeVideoCommentsTasksReady

▸ **processYoutubeVideoCommentsTasksReady**(`response`): `Promise`\<[`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:4062

___

### processYoutubeVideoInfoLiveAdvanced

▸ **processYoutubeVideoInfoLiveAdvanced**(`response`): `Promise`\<[`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)\>

#### Defined in

main.ts:3782

___

### processYoutubeVideoInfoTaskGetAdvanced

▸ **processYoutubeVideoInfoTaskGetAdvanced**(`response`): `Promise`\<[`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:3740

___

### processYoutubeVideoInfoTaskPost

▸ **processYoutubeVideoInfoTaskPost**(`response`): `Promise`\<[`SerpYoutubeVideoInfoTaskPostResponseInfo`](SerpYoutubeVideoInfoTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTaskPostResponseInfo`](SerpYoutubeVideoInfoTaskPostResponseInfo.md)\>

#### Defined in

main.ts:3623

___

### processYoutubeVideoInfoTasksFixed

▸ **processYoutubeVideoInfoTasksFixed**(`response`): `Promise`\<[`SerpYoutubeVideoInfoTasksFixedResponseInfo`](SerpYoutubeVideoInfoTasksFixedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTasksFixedResponseInfo`](SerpYoutubeVideoInfoTasksFixedResponseInfo.md)\>

#### Defined in

main.ts:3697

___

### processYoutubeVideoInfoTasksReady

▸ **processYoutubeVideoInfoTasksReady**(`response`): `Promise`\<[`SerpYoutubeVideoInfoTasksReadyResponseInfo`](SerpYoutubeVideoInfoTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTasksReadyResponseInfo`](SerpYoutubeVideoInfoTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:3660

___

### processYoutubeVideoSubtitlesLiveAdvanced

▸ **processYoutubeVideoSubtitlesLiveAdvanced**(`response`): `Promise`\<[`SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)\>

#### Defined in

main.ts:3983

___

### processYoutubeVideoSubtitlesTaskGetAdvanced

▸ **processYoutubeVideoSubtitlesTaskGetAdvanced**(`response`): `Promise`\<[`SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:3941

___

### processYoutubeVideoSubtitlesTaskPost

▸ **processYoutubeVideoSubtitlesTaskPost**(`response`): `Promise`\<[`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)\>

#### Defined in

main.ts:3824

___

### processYoutubeVideoSubtitlesTasksFixed

▸ **processYoutubeVideoSubtitlesTasksFixed**(`response`): `Promise`\<[`SerpYoutubeVideoSubtitlesTasksFixedResponseInfo`](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTasksFixedResponseInfo`](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md)\>

#### Defined in

main.ts:3898

___

### processYoutubeVideoSubtitlesTasksReady

▸ **processYoutubeVideoSubtitlesTasksReady**(`response`): `Promise`\<[`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:3861

___

### screenshot

▸ **screenshot**(`body`): `Promise`\<[`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpScreenshotRequestInfo`](SerpScreenshotRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:109

___

### serpBaiduLanguages

▸ **serpBaiduLanguages**(): `Promise`\<[`SerpBaiduLanguagesResponseInfo`](SerpBaiduLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBaiduLanguagesResponseInfo`](SerpBaiduLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4777

___

### serpBaiduLocations

▸ **serpBaiduLocations**(): `Promise`\<[`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4695

___

### serpBaiduLocationsCountry

▸ **serpBaiduLocationsCountry**(`country`): `Promise`\<[`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `country` | `string` | country ISO code optional field specify the ISO code if you want to filter the list of locations by country example: us |

#### Returns

`Promise`\<[`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4737

___

### serpBingLanguages

▸ **serpBingLanguages**(): `Promise`\<[`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2789

___

### serpBingLocations

▸ **serpBingLocations**(): `Promise`\<[`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2707

___

### serpBingLocationsCountry

▸ **serpBingLocationsCountry**(`country`): `Promise`\<[`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `country` | `string` | country ISO code optional field specify the ISO code if you want to filter the list of locations by country example: us |

#### Returns

`Promise`\<[`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:2749

___

### serpErrors

▸ **serpErrors**(`body`): `Promise`\<[`SerpErrorsResponseInfo`](SerpErrorsResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpErrorsRequestInfo`](SerpErrorsRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpErrorsResponseInfo`](SerpErrorsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:67

___

### serpGoogleLanguages

▸ **serpGoogleLanguages**(): `Promise`\<[`SerpGoogleLanguagesResponseInfo`](SerpGoogleLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleLanguagesResponseInfo`](SerpGoogleLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:274

___

### serpGoogleLocations

▸ **serpGoogleLocations**(): `Promise`\<[`SerpGoogleLocationsResponseInfo`](SerpGoogleLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleLocationsResponseInfo`](SerpGoogleLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:192

___

### serpGoogleLocationsCountry

▸ **serpGoogleLocationsCountry**(`country`): `Promise`\<[`SerpGoogleLocationsCountryResponseInfo`](SerpGoogleLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `country` | `string` | country ISO code optional field specify the ISO code if you want to filter the list of locations by country example: us |

#### Returns

`Promise`\<[`SerpGoogleLocationsCountryResponseInfo`](SerpGoogleLocationsCountryResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:234

___

### serpIdList

▸ **serpIdList**(`body`): `Promise`\<[`SerpIdListResponseInfo`](SerpIdListResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpIdListRequestInfo`](SerpIdListRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpIdListResponseInfo`](SerpIdListResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:25

___

### serpSeznamLanguages

▸ **serpSeznamLanguages**(): `Promise`\<[`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:5386

___

### serpSeznamLocations

▸ **serpSeznamLocations**(): `Promise`\<[`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:5304

___

### serpSeznamLocationsCountry

▸ **serpSeznamLocationsCountry**(`country`): `Promise`\<[`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `country` | `string` | country ISO code optional field specify the ISO code if you want to filter the list of locations by country example: us |

#### Returns

`Promise`\<[`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:5346

___

### serpYahooLanguages

▸ **serpYahooLanguages**(): `Promise`\<[`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4287

___

### serpYahooLocations

▸ **serpYahooLocations**(): `Promise`\<[`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4205

___

### serpYahooLocationsCountry

▸ **serpYahooLocationsCountry**(`country`): `Promise`\<[`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `country` | `string` | country ISO code optional field specify the ISO code if you want to filter the list of locations by country example: us |

#### Returns

`Promise`\<[`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4247

___

### serpYoutubeLanguages

▸ **serpYoutubeLanguages**(): `Promise`\<[`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3565

___

### serpYoutubeLocations

▸ **serpYoutubeLocations**(): `Promise`\<[`SerpYoutubeLocationsResponseInfo`](SerpYoutubeLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYoutubeLocationsResponseInfo`](SerpYoutubeLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3483

___

### serpYoutubeLocationsCountry

▸ **serpYoutubeLocationsCountry**(`country`): `Promise`\<[`SerpYoutubeLocationsCountryResponseInfo`](SerpYoutubeLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `country` | `string` | country ISO code optional field specify the ISO code if you want to filter the list of locations by country example: us |

#### Returns

`Promise`\<[`SerpYoutubeLocationsCountryResponseInfo`](SerpYoutubeLocationsCountryResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3525

___

### seznamOrganicTaskGetAdvanced

▸ **seznamOrganicTaskGetAdvanced**(`id`): `Promise`\<[`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:5585

___

### seznamOrganicTaskGetHtml

▸ **seznamOrganicTaskGetHtml**(`id`): `Promise`\<[`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:5628

___

### seznamOrganicTaskGetRegular

▸ **seznamOrganicTaskGetRegular**(`id`): `Promise`\<[`SerpSeznamOrganicTaskGetRegularResponseInfo`](SerpSeznamOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskGetRegularResponseInfo`](SerpSeznamOrganicTaskGetRegularResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:5542

___

### seznamOrganicTaskPost

▸ **seznamOrganicTaskPost**(`body`): `Promise`\<[`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:5424

___

### seznamOrganicTasksFixed

▸ **seznamOrganicTasksFixed**(): `Promise`\<[`SerpSeznamOrganicTasksFixedResponseInfo`](SerpSeznamOrganicTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpSeznamOrganicTasksFixedResponseInfo`](SerpSeznamOrganicTasksFixedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:5502

___

### seznamOrganicTasksReady

▸ **seznamOrganicTasksReady**(): `Promise`\<[`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:5465

___

### yahooOrganicLiveAdvanced

▸ **yahooOrganicLiveAdvanced**(`body`): `Promise`\<[`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4612

___

### yahooOrganicLiveHtml

▸ **yahooOrganicLiveHtml**(`body`): `Promise`\<[`SerpYahooOrganicLiveHtmlResponseInfo`](SerpYahooOrganicLiveHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpYahooOrganicLiveHtmlResponseInfo`](SerpYahooOrganicLiveHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4654

___

### yahooOrganicLiveRegular

▸ **yahooOrganicLiveRegular**(`body`): `Promise`\<[`SerpYahooOrganicLiveRegularResponseInfo`](SerpYahooOrganicLiveRegularResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpYahooOrganicLiveRegularResponseInfo`](SerpYahooOrganicLiveRegularResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4570

___

### yahooOrganicTaskGetAdvanced

▸ **yahooOrganicTaskGetAdvanced**(`id`): `Promise`\<[`SerpYahooOrganicTaskGetAdvancedResponseInfo`](SerpYahooOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpYahooOrganicTaskGetAdvancedResponseInfo`](SerpYahooOrganicTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4486

___

### yahooOrganicTaskGetHtml

▸ **yahooOrganicTaskGetHtml**(`id`): `Promise`\<[`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4529

___

### yahooOrganicTaskGetRegular

▸ **yahooOrganicTaskGetRegular**(`id`): `Promise`\<[`SerpYahooOrganicTaskGetRegularResponseInfo`](SerpYahooOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpYahooOrganicTaskGetRegularResponseInfo`](SerpYahooOrganicTaskGetRegularResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4443

___

### yahooOrganicTaskPost

▸ **yahooOrganicTaskPost**(`body`): `Promise`\<[`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4325

___

### yahooOrganicTasksFixed

▸ **yahooOrganicTasksFixed**(): `Promise`\<[`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4403

___

### yahooOrganicTasksReady

▸ **yahooOrganicTasksReady**(): `Promise`\<[`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4366

___

### youtubeVideoCommentsLiveAdvanced

▸ **youtubeVideoCommentsLiveAdvanced**(`body`): `Promise`\<[`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4164

___

### youtubeVideoCommentsTaskGetAdvanced

▸ **youtubeVideoCommentsTaskGetAdvanced**(`id`): `Promise`\<[`SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4123

___

### youtubeVideoCommentsTaskPost

▸ **youtubeVideoCommentsTaskPost**(`body`): `Promise`\<[`SerpYoutubeVideoCommentsTaskPostResponseInfo`](SerpYoutubeVideoCommentsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpYoutubeVideoCommentsTaskPostRequestInfo`](SerpYoutubeVideoCommentsTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTaskPostResponseInfo`](SerpYoutubeVideoCommentsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4005

___

### youtubeVideoCommentsTasksFixed

▸ **youtubeVideoCommentsTasksFixed**(): `Promise`\<[`SerpYoutubeVideoCommentsTasksFixedResponseInfo`](SerpYoutubeVideoCommentsTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTasksFixedResponseInfo`](SerpYoutubeVideoCommentsTasksFixedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4083

___

### youtubeVideoCommentsTasksReady

▸ **youtubeVideoCommentsTasksReady**(): `Promise`\<[`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:4046

___

### youtubeVideoInfoLiveAdvanced

▸ **youtubeVideoInfoLiveAdvanced**(`body`): `Promise`\<[`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpYoutubeVideoInfoLiveAdvancedRequestInfo`](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3762

___

### youtubeVideoInfoTaskGetAdvanced

▸ **youtubeVideoInfoTaskGetAdvanced**(`id`): `Promise`\<[`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3721

___

### youtubeVideoInfoTaskPost

▸ **youtubeVideoInfoTaskPost**(`body`): `Promise`\<[`SerpYoutubeVideoInfoTaskPostResponseInfo`](SerpYoutubeVideoInfoTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpYoutubeVideoInfoTaskPostRequestInfo`](SerpYoutubeVideoInfoTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTaskPostResponseInfo`](SerpYoutubeVideoInfoTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3603

___

### youtubeVideoInfoTasksFixed

▸ **youtubeVideoInfoTasksFixed**(): `Promise`\<[`SerpYoutubeVideoInfoTasksFixedResponseInfo`](SerpYoutubeVideoInfoTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTasksFixedResponseInfo`](SerpYoutubeVideoInfoTasksFixedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3681

___

### youtubeVideoInfoTasksReady

▸ **youtubeVideoInfoTasksReady**(): `Promise`\<[`SerpYoutubeVideoInfoTasksReadyResponseInfo`](SerpYoutubeVideoInfoTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTasksReadyResponseInfo`](SerpYoutubeVideoInfoTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3644

___

### youtubeVideoSubtitlesLiveAdvanced

▸ **youtubeVideoSubtitlesLiveAdvanced**(`body`): `Promise`\<[`SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3963

___

### youtubeVideoSubtitlesTaskGetAdvanced

▸ **youtubeVideoSubtitlesTaskGetAdvanced**(`id`): `Promise`\<[`SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3922

___

### youtubeVideoSubtitlesTaskPost

▸ **youtubeVideoSubtitlesTaskPost**(`body`): `Promise`\<[`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`SerpYoutubeVideoSubtitlesTaskPostRequestInfo`](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3804

___

### youtubeVideoSubtitlesTasksFixed

▸ **youtubeVideoSubtitlesTasksFixed**(): `Promise`\<[`SerpYoutubeVideoSubtitlesTasksFixedResponseInfo`](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTasksFixedResponseInfo`](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3882

___

### youtubeVideoSubtitlesTasksReady

▸ **youtubeVideoSubtitlesTasksReady**(): `Promise`\<[`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:3845
