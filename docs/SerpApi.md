# SerpApi

All URIs are relative to *https://api.dataforseo.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
[**serpIdList**](SerpApi.md#serpIdList) | **POST**  /v3/serp/id_list  |
[**serpErrors**](SerpApi.md#serpErrors) | **POST**  /v3/serp/errors  |
[**screenshot**](SerpApi.md#screenshot) | **POST**  /v3/serp/screenshot  |
[**aiSummary**](SerpApi.md#aiSummary) | **POST**  /v3/serp/ai_summary  |
[**serpGoogleLocations**](SerpApi.md#serpGoogleLocations) | **GET**  /v3/serp/google/locations  |
[**serpGoogleLocationsCountry**](SerpApi.md#serpGoogleLocationsCountry) | **GET**  /v3/serp/google/locations/{country}  |
[**serpGoogleLanguages**](SerpApi.md#serpGoogleLanguages) | **GET**  /v3/serp/google/languages  |
[**googleOrganicTaskPost**](SerpApi.md#googleOrganicTaskPost) | **POST**  /v3/serp/google/organic/task_post  |
[**googleOrganicTasksReady**](SerpApi.md#googleOrganicTasksReady) | **GET**  /v3/serp/google/organic/tasks_ready  |
[**tasksReady**](SerpApi.md#tasksReady) | **GET**  /v3/serp/tasks_ready  |
[**googleOrganicTasksFixed**](SerpApi.md#googleOrganicTasksFixed) | **GET**  /v3/serp/google/organic/tasks_fixed  |
[**googleOrganicTaskGetRegular**](SerpApi.md#googleOrganicTaskGetRegular) | **GET**  /v3/serp/google/organic/task_get/regular/{id}  |
[**googleOrganicTaskGetAdvanced**](SerpApi.md#googleOrganicTaskGetAdvanced) | **GET**  /v3/serp/google/organic/task_get/advanced/{id}  |
[**googleOrganicTaskGetHtml**](SerpApi.md#googleOrganicTaskGetHtml) | **GET**  /v3/serp/google/organic/task_get/html/{id}  |
[**googleOrganicLiveRegular**](SerpApi.md#googleOrganicLiveRegular) | **POST**  /v3/serp/google/organic/live/regular  |
[**googleOrganicLiveAdvanced**](SerpApi.md#googleOrganicLiveAdvanced) | **POST**  /v3/serp/google/organic/live/advanced  |
[**googleOrganicLiveHtml**](SerpApi.md#googleOrganicLiveHtml) | **POST**  /v3/serp/google/organic/live/html  |
[**serpGoogleAiModeLanguages**](SerpApi.md#serpGoogleAiModeLanguages) | **GET**  /v3/serp/google/ai_mode/languages  |
[**googleAiModeTaskPost**](SerpApi.md#googleAiModeTaskPost) | **POST**  /v3/serp/google/ai_mode/task_post  |
[**googleAiModeTasksReady**](SerpApi.md#googleAiModeTasksReady) | **GET**  /v3/serp/google/ai_mode/tasks_ready  |
[**googleAiModeTasksFixed**](SerpApi.md#googleAiModeTasksFixed) | **GET**  /v3/serp/google/ai_mode/tasks_fixed  |
[**googleAiModeTaskGetAdvanced**](SerpApi.md#googleAiModeTaskGetAdvanced) | **GET**  /v3/serp/google/ai_mode/task_get/advanced/{id}  |
[**googleAiModeTaskGetHtml**](SerpApi.md#googleAiModeTaskGetHtml) | **GET**  /v3/serp/google/ai_mode/task_get/html/{id}  |
[**googleAiModeLiveAdvanced**](SerpApi.md#googleAiModeLiveAdvanced) | **POST**  /v3/serp/google/ai_mode/live/advanced  |
[**googleAiModeLiveHtml**](SerpApi.md#googleAiModeLiveHtml) | **POST**  /v3/serp/google/ai_mode/live/html  |
[**googleMapsTaskPost**](SerpApi.md#googleMapsTaskPost) | **POST**  /v3/serp/google/maps/task_post  |
[**googleMapsTasksReady**](SerpApi.md#googleMapsTasksReady) | **GET**  /v3/serp/google/maps/tasks_ready  |
[**googleMapsTasksFixed**](SerpApi.md#googleMapsTasksFixed) | **GET**  /v3/serp/google/maps/tasks_fixed  |
[**googleMapsTaskGetAdvanced**](SerpApi.md#googleMapsTaskGetAdvanced) | **GET**  /v3/serp/google/maps/task_get/advanced/{id}  |
[**googleMapsLiveAdvanced**](SerpApi.md#googleMapsLiveAdvanced) | **POST**  /v3/serp/google/maps/live/advanced  |
[**googleLocalFinderTaskPost**](SerpApi.md#googleLocalFinderTaskPost) | **POST**  /v3/serp/google/local_finder/task_post  |
[**googleLocalFinderTasksReady**](SerpApi.md#googleLocalFinderTasksReady) | **GET**  /v3/serp/google/local_finder/tasks_ready  |
[**googleLocalFinderTasksFixed**](SerpApi.md#googleLocalFinderTasksFixed) | **GET**  /v3/serp/google/local_finder/tasks_fixed  |
[**googleLocalFinderTaskGetAdvanced**](SerpApi.md#googleLocalFinderTaskGetAdvanced) | **GET**  /v3/serp/google/local_finder/task_get/advanced/{id}  |
[**googleLocalFinderTaskGetHtml**](SerpApi.md#googleLocalFinderTaskGetHtml) | **GET**  /v3/serp/google/local_finder/task_get/html/{id}  |
[**googleLocalFinderLiveAdvanced**](SerpApi.md#googleLocalFinderLiveAdvanced) | **POST**  /v3/serp/google/local_finder/live/advanced  |
[**googleLocalFinderLiveHtml**](SerpApi.md#googleLocalFinderLiveHtml) | **POST**  /v3/serp/google/local_finder/live/html  |
[**googleNewsTaskPost**](SerpApi.md#googleNewsTaskPost) | **POST**  /v3/serp/google/news/task_post  |
[**googleNewsTasksReady**](SerpApi.md#googleNewsTasksReady) | **GET**  /v3/serp/google/news/tasks_ready  |
[**googleNewsTasksFixed**](SerpApi.md#googleNewsTasksFixed) | **GET**  /v3/serp/google/news/tasks_fixed  |
[**googleNewsTaskGetAdvanced**](SerpApi.md#googleNewsTaskGetAdvanced) | **GET**  /v3/serp/google/news/task_get/advanced/{id}  |
[**googleNewsTaskGetHtml**](SerpApi.md#googleNewsTaskGetHtml) | **GET**  /v3/serp/google/news/task_get/html/{id}  |
[**googleNewsLiveAdvanced**](SerpApi.md#googleNewsLiveAdvanced) | **POST**  /v3/serp/google/news/live/advanced  |
[**googleNewsLiveHtml**](SerpApi.md#googleNewsLiveHtml) | **POST**  /v3/serp/google/news/live/html  |
[**googleEventsTaskPost**](SerpApi.md#googleEventsTaskPost) | **POST**  /v3/serp/google/events/task_post  |
[**googleEventsTasksReady**](SerpApi.md#googleEventsTasksReady) | **GET**  /v3/serp/google/events/tasks_ready  |
[**googleEventsTasksFixed**](SerpApi.md#googleEventsTasksFixed) | **GET**  /v3/serp/google/events/tasks_fixed  |
[**googleEventsTaskGetAdvanced**](SerpApi.md#googleEventsTaskGetAdvanced) | **GET**  /v3/serp/google/events/task_get/advanced/{id}  |
[**googleEventsLiveAdvanced**](SerpApi.md#googleEventsLiveAdvanced) | **POST**  /v3/serp/google/events/live/advanced  |
[**googleImagesTaskPost**](SerpApi.md#googleImagesTaskPost) | **POST**  /v3/serp/google/images/task_post  |
[**googleImagesTasksReady**](SerpApi.md#googleImagesTasksReady) | **GET**  /v3/serp/google/images/tasks_ready  |
[**googleImagesTasksFixed**](SerpApi.md#googleImagesTasksFixed) | **GET**  /v3/serp/google/images/tasks_fixed  |
[**googleImagesTaskGetAdvanced**](SerpApi.md#googleImagesTaskGetAdvanced) | **GET**  /v3/serp/google/images/task_get/advanced/{id}  |
[**googleImagesTaskGetHtml**](SerpApi.md#googleImagesTaskGetHtml) | **GET**  /v3/serp/google/images/task_get/html/{id}  |
[**googleImagesLiveAdvanced**](SerpApi.md#googleImagesLiveAdvanced) | **POST**  /v3/serp/google/images/live/advanced  |
[**googleImagesLiveHtml**](SerpApi.md#googleImagesLiveHtml) | **POST**  /v3/serp/google/images/live/html  |
[**googleSearchByImageTaskPost**](SerpApi.md#googleSearchByImageTaskPost) | **POST**  /v3/serp/google/search_by_image/task_post  |
[**googleSearchByImageTasksReady**](SerpApi.md#googleSearchByImageTasksReady) | **GET**  /v3/serp/google/search_by_image/tasks_ready  |
[**googleSearchByImageTasksFixed**](SerpApi.md#googleSearchByImageTasksFixed) | **GET**  /v3/serp/google/search_by_image/tasks_fixed  |
[**googleSearchByImageTaskGetAdvanced**](SerpApi.md#googleSearchByImageTaskGetAdvanced) | **GET**  /v3/serp/google/search_by_image/task_get/advanced/{id}  |
[**googleJobsTaskPost**](SerpApi.md#googleJobsTaskPost) | **POST**  /v3/serp/google/jobs/task_post  |
[**googleJobsTasksReady**](SerpApi.md#googleJobsTasksReady) | **GET**  /v3/serp/google/jobs/tasks_ready  |
[**googleJobsTasksFixed**](SerpApi.md#googleJobsTasksFixed) | **GET**  /v3/serp/google/jobs/tasks_fixed  |
[**googleJobsTaskGetAdvanced**](SerpApi.md#googleJobsTaskGetAdvanced) | **GET**  /v3/serp/google/jobs/task_get/advanced/{id}  |
[**googleJobsTaskGetHtml**](SerpApi.md#googleJobsTaskGetHtml) | **GET**  /v3/serp/google/jobs/task_get/html/{id}  |
[**googleAutocompleteTaskPost**](SerpApi.md#googleAutocompleteTaskPost) | **POST**  /v3/serp/google/autocomplete/task_post  |
[**googleAutocompleteTasksReady**](SerpApi.md#googleAutocompleteTasksReady) | **GET**  /v3/serp/google/autocomplete/tasks_ready  |
[**googleAutocompleteTasksFixed**](SerpApi.md#googleAutocompleteTasksFixed) | **GET**  /v3/serp/google/autocomplete/tasks_fixed  |
[**googleAutocompleteTaskGetAdvanced**](SerpApi.md#googleAutocompleteTaskGetAdvanced) | **GET**  /v3/serp/google/autocomplete/task_get/advanced/{id}  |
[**googleAutocompleteLiveAdvanced**](SerpApi.md#googleAutocompleteLiveAdvanced) | **POST**  /v3/serp/google/autocomplete/live/advanced  |
[**googleDatasetSearchTaskPost**](SerpApi.md#googleDatasetSearchTaskPost) | **POST**  /v3/serp/google/dataset_search/task_post  |
[**googleDatasetSearchTasksReady**](SerpApi.md#googleDatasetSearchTasksReady) | **GET**  /v3/serp/google/dataset_search/tasks_ready  |
[**googleDatasetSearchTasksFixed**](SerpApi.md#googleDatasetSearchTasksFixed) | **GET**  /v3/serp/google/dataset_search/tasks_fixed  |
[**googleDatasetSearchTaskGetAdvanced**](SerpApi.md#googleDatasetSearchTaskGetAdvanced) | **GET**  /v3/serp/google/dataset_search/task_get/advanced/{id}  |
[**googleDatasetSearchLiveAdvanced**](SerpApi.md#googleDatasetSearchLiveAdvanced) | **POST**  /v3/serp/google/dataset_search/live/advanced  |
[**googleDatasetInfoTaskPost**](SerpApi.md#googleDatasetInfoTaskPost) | **POST**  /v3/serp/google/dataset_info/task_post  |
[**googleDatasetInfoTasksReady**](SerpApi.md#googleDatasetInfoTasksReady) | **GET**  /v3/serp/google/dataset_info/tasks_ready  |
[**googleDatasetInfoTasksFixed**](SerpApi.md#googleDatasetInfoTasksFixed) | **GET**  /v3/serp/google/dataset_info/tasks_fixed  |
[**googleDatasetInfoTaskGetAdvanced**](SerpApi.md#googleDatasetInfoTaskGetAdvanced) | **GET**  /v3/serp/google/dataset_info/task_get/advanced/{id}  |
[**googleDatasetInfoLiveAdvanced**](SerpApi.md#googleDatasetInfoLiveAdvanced) | **POST**  /v3/serp/google/dataset_info/live/advanced  |
[**serpGoogleAdsAdvertisersLocations**](SerpApi.md#serpGoogleAdsAdvertisersLocations) | **GET**  /v3/serp/google/ads_advertisers/locations  |
[**googleAdsAdvertisersTaskPost**](SerpApi.md#googleAdsAdvertisersTaskPost) | **POST**  /v3/serp/google/ads_advertisers/task_post  |
[**googleAdsAdvertisersTasksReady**](SerpApi.md#googleAdsAdvertisersTasksReady) | **GET**  /v3/serp/google/ads_advertisers/tasks_ready  |
[**googleAdsAdvertisersTaskGetAdvanced**](SerpApi.md#googleAdsAdvertisersTaskGetAdvanced) | **GET**  /v3/serp/google/ads_advertisers/task_get/advanced/{id}  |
[**serpGoogleAdsSearchLocations**](SerpApi.md#serpGoogleAdsSearchLocations) | **GET**  /v3/serp/google/ads_search/locations  |
[**googleAdsSearchTaskPost**](SerpApi.md#googleAdsSearchTaskPost) | **POST**  /v3/serp/google/ads_search/task_post  |
[**googleAdsSearchTasksReady**](SerpApi.md#googleAdsSearchTasksReady) | **GET**  /v3/serp/google/ads_search/tasks_ready  |
[**googleAdsSearchTaskGetAdvanced**](SerpApi.md#googleAdsSearchTaskGetAdvanced) | **GET**  /v3/serp/google/ads_search/task_get/advanced/{id}  |
[**serpBingLocations**](SerpApi.md#serpBingLocations) | **GET**  /v3/serp/bing/locations  |
[**serpBingLocationsCountry**](SerpApi.md#serpBingLocationsCountry) | **GET**  /v3/serp/bing/locations/{country}  |
[**serpBingLanguages**](SerpApi.md#serpBingLanguages) | **GET**  /v3/serp/bing/languages  |
[**bingOrganicTaskPost**](SerpApi.md#bingOrganicTaskPost) | **POST**  /v3/serp/bing/organic/task_post  |
[**bingOrganicTasksReady**](SerpApi.md#bingOrganicTasksReady) | **GET**  /v3/serp/bing/organic/tasks_ready  |
[**bingOrganicTasksFixed**](SerpApi.md#bingOrganicTasksFixed) | **GET**  /v3/serp/bing/organic/tasks_fixed  |
[**bingOrganicTaskGetRegular**](SerpApi.md#bingOrganicTaskGetRegular) | **GET**  /v3/serp/bing/organic/task_get/regular/{id}  |
[**bingOrganicTaskGetAdvanced**](SerpApi.md#bingOrganicTaskGetAdvanced) | **GET**  /v3/serp/bing/organic/task_get/advanced/{id}  |
[**bingOrganicTaskGetHtml**](SerpApi.md#bingOrganicTaskGetHtml) | **GET**  /v3/serp/bing/organic/task_get/html/{id}  |
[**bingOrganicLiveRegular**](SerpApi.md#bingOrganicLiveRegular) | **POST**  /v3/serp/bing/organic/live/regular  |
[**bingOrganicLiveAdvanced**](SerpApi.md#bingOrganicLiveAdvanced) | **POST**  /v3/serp/bing/organic/live/advanced  |
[**bingOrganicLiveHtml**](SerpApi.md#bingOrganicLiveHtml) | **POST**  /v3/serp/bing/organic/live/html  |
[**bingLocalPackTaskPost**](SerpApi.md#bingLocalPackTaskPost) | **POST**  /v3/serp/bing/local_pack/task_post  |
[**bingLocalPackTasksReady**](SerpApi.md#bingLocalPackTasksReady) | **GET**  /v3/serp/bing/local_pack/tasks_ready  |
[**bingLocalPackTasksFixed**](SerpApi.md#bingLocalPackTasksFixed) | **GET**  /v3/serp/bing/local_pack/tasks_fixed  |
[**bingLocalPackTaskGetRegular**](SerpApi.md#bingLocalPackTaskGetRegular) | **GET**  /v3/serp/bing/local_pack/task_get/regular/{id}  |
[**bingLocalPackTaskGetHtml**](SerpApi.md#bingLocalPackTaskGetHtml) | **GET**  /v3/serp/bing/local_pack/task_get/html/{id}  |
[**bingLocalPackLiveRegular**](SerpApi.md#bingLocalPackLiveRegular) | **POST**  /v3/serp/bing/local_pack/live/regular  |
[**bingLocalPackLiveHtml**](SerpApi.md#bingLocalPackLiveHtml) | **POST**  /v3/serp/bing/local_pack/live/html  |
[**serpYoutubeLocations**](SerpApi.md#serpYoutubeLocations) | **GET**  /v3/serp/youtube/locations  |
[**serpYoutubeLocationsCountry**](SerpApi.md#serpYoutubeLocationsCountry) | **GET**  /v3/serp/youtube/locations/{country}  |
[**serpYoutubeLanguages**](SerpApi.md#serpYoutubeLanguages) | **GET**  /v3/serp/youtube/languages  |
[**youtubeVideoInfoTaskPost**](SerpApi.md#youtubeVideoInfoTaskPost) | **POST**  /v3/serp/youtube/video_info/task_post  |
[**youtubeVideoInfoTasksReady**](SerpApi.md#youtubeVideoInfoTasksReady) | **GET**  /v3/serp/youtube/video_info/tasks_ready  |
[**youtubeVideoInfoTasksFixed**](SerpApi.md#youtubeVideoInfoTasksFixed) | **GET**  /v3/serp/youtube/video_info/tasks_fixed  |
[**youtubeVideoInfoTaskGetAdvanced**](SerpApi.md#youtubeVideoInfoTaskGetAdvanced) | **GET**  /v3/serp/youtube/video_info/task_get/advanced/{id}  |
[**youtubeVideoInfoLiveAdvanced**](SerpApi.md#youtubeVideoInfoLiveAdvanced) | **POST**  /v3/serp/youtube/video_info/live/advanced  |
[**youtubeVideoSubtitlesTaskPost**](SerpApi.md#youtubeVideoSubtitlesTaskPost) | **POST**  /v3/serp/youtube/video_subtitles/task_post  |
[**youtubeVideoSubtitlesTasksReady**](SerpApi.md#youtubeVideoSubtitlesTasksReady) | **GET**  /v3/serp/youtube/video_subtitles/tasks_ready  |
[**youtubeVideoSubtitlesTasksFixed**](SerpApi.md#youtubeVideoSubtitlesTasksFixed) | **GET**  /v3/serp/youtube/video_subtitles/tasks_fixed  |
[**youtubeVideoSubtitlesTaskGetAdvanced**](SerpApi.md#youtubeVideoSubtitlesTaskGetAdvanced) | **GET**  /v3/serp/youtube/video_subtitles/task_get/advanced/{id}  |
[**youtubeVideoSubtitlesLiveAdvanced**](SerpApi.md#youtubeVideoSubtitlesLiveAdvanced) | **POST**  /v3/serp/youtube/video_subtitles/live/advanced  |
[**youtubeVideoCommentsTaskPost**](SerpApi.md#youtubeVideoCommentsTaskPost) | **POST**  /v3/serp/youtube/video_comments/task_post  |
[**youtubeVideoCommentsTasksReady**](SerpApi.md#youtubeVideoCommentsTasksReady) | **GET**  /v3/serp/youtube/video_comments/tasks_ready  |
[**youtubeVideoCommentsTasksFixed**](SerpApi.md#youtubeVideoCommentsTasksFixed) | **GET**  /v3/serp/youtube/video_comments/tasks_fixed  |
[**youtubeVideoCommentsTaskGetAdvanced**](SerpApi.md#youtubeVideoCommentsTaskGetAdvanced) | **GET**  /v3/serp/youtube/video_comments/task_get/advanced/{id}  |
[**youtubeVideoCommentsLiveAdvanced**](SerpApi.md#youtubeVideoCommentsLiveAdvanced) | **POST**  /v3/serp/youtube/video_comments/live/advanced  |
[**serpYahooLocations**](SerpApi.md#serpYahooLocations) | **GET**  /v3/serp/yahoo/locations  |
[**serpYahooLocationsCountry**](SerpApi.md#serpYahooLocationsCountry) | **GET**  /v3/serp/yahoo/locations/{country}  |
[**serpYahooLanguages**](SerpApi.md#serpYahooLanguages) | **GET**  /v3/serp/yahoo/languages  |
[**yahooOrganicTaskPost**](SerpApi.md#yahooOrganicTaskPost) | **POST**  /v3/serp/yahoo/organic/task_post  |
[**yahooOrganicTasksReady**](SerpApi.md#yahooOrganicTasksReady) | **GET**  /v3/serp/yahoo/organic/tasks_ready  |
[**yahooOrganicTasksFixed**](SerpApi.md#yahooOrganicTasksFixed) | **GET**  /v3/serp/yahoo/organic/tasks_fixed  |
[**yahooOrganicTaskGetRegular**](SerpApi.md#yahooOrganicTaskGetRegular) | **GET**  /v3/serp/yahoo/organic/task_get/regular/{id}  |
[**yahooOrganicTaskGetAdvanced**](SerpApi.md#yahooOrganicTaskGetAdvanced) | **GET**  /v3/serp/yahoo/organic/task_get/advanced/{id}  |
[**yahooOrganicTaskGetHtml**](SerpApi.md#yahooOrganicTaskGetHtml) | **GET**  /v3/serp/yahoo/organic/task_get/html/{id}  |
[**yahooOrganicLiveRegular**](SerpApi.md#yahooOrganicLiveRegular) | **POST**  /v3/serp/yahoo/organic/live/regular  |
[**yahooOrganicLiveAdvanced**](SerpApi.md#yahooOrganicLiveAdvanced) | **POST**  /v3/serp/yahoo/organic/live/advanced  |
[**yahooOrganicLiveHtml**](SerpApi.md#yahooOrganicLiveHtml) | **POST**  /v3/serp/yahoo/organic/live/html  |
[**serpBaiduLocations**](SerpApi.md#serpBaiduLocations) | **GET**  /v3/serp/baidu/locations  |
[**serpBaiduLocationsCountry**](SerpApi.md#serpBaiduLocationsCountry) | **GET**  /v3/serp/baidu/locations/{country}  |
[**serpBaiduLanguages**](SerpApi.md#serpBaiduLanguages) | **GET**  /v3/serp/baidu/languages  |
[**baiduOrganicTaskPost**](SerpApi.md#baiduOrganicTaskPost) | **POST**  /v3/serp/baidu/organic/task_post  |
[**baiduOrganicTasksReady**](SerpApi.md#baiduOrganicTasksReady) | **GET**  /v3/serp/baidu/organic/tasks_ready  |
[**baiduOrganicTasksFixed**](SerpApi.md#baiduOrganicTasksFixed) | **GET**  /v3/serp/baidu/organic/tasks_fixed  |
[**baiduOrganicTaskGetRegular**](SerpApi.md#baiduOrganicTaskGetRegular) | **GET**  /v3/serp/baidu/organic/task_get/regular/{id}  |
[**baiduOrganicTaskGetAdvanced**](SerpApi.md#baiduOrganicTaskGetAdvanced) | **GET**  /v3/serp/baidu/organic/task_get/advanced/{id}  |
[**baiduOrganicTaskGetHtml**](SerpApi.md#baiduOrganicTaskGetHtml) | **GET**  /v3/serp/baidu/organic/task_get/html/{id}  |
[**naverOrganicTaskPost**](SerpApi.md#naverOrganicTaskPost) | **POST**  /v3/serp/naver/organic/task_post  |
[**naverOrganicTasksReady**](SerpApi.md#naverOrganicTasksReady) | **GET**  /v3/serp/naver/organic/tasks_ready  |
[**naverOrganicTasksFixed**](SerpApi.md#naverOrganicTasksFixed) | **GET**  /v3/serp/naver/organic/tasks_fixed  |
[**naverOrganicTaskGetRegular**](SerpApi.md#naverOrganicTaskGetRegular) | **GET**  /v3/serp/naver/organic/task_get/regular/{id}  |
[**naverOrganicTaskGetAdvanced**](SerpApi.md#naverOrganicTaskGetAdvanced) | **GET**  /v3/serp/naver/organic/task_get/advanced/{id}  |
[**naverOrganicTaskGetHtml**](SerpApi.md#naverOrganicTaskGetHtml) | **GET**  /v3/serp/naver/organic/task_get/html/{id}  |
[**serpSeznamLocations**](SerpApi.md#serpSeznamLocations) | **GET**  /v3/serp/seznam/locations  |
[**serpSeznamLocationsCountry**](SerpApi.md#serpSeznamLocationsCountry) | **GET**  /v3/serp/seznam/locations/{country}  |
[**serpSeznamLanguages**](SerpApi.md#serpSeznamLanguages) | **GET**  /v3/serp/seznam/languages  |
[**seznamOrganicTaskPost**](SerpApi.md#seznamOrganicTaskPost) | **POST**  /v3/serp/seznam/organic/task_post  |
[**seznamOrganicTasksReady**](SerpApi.md#seznamOrganicTasksReady) | **GET**  /v3/serp/seznam/organic/tasks_ready  |
[**seznamOrganicTasksFixed**](SerpApi.md#seznamOrganicTasksFixed) | **GET**  /v3/serp/seznam/organic/tasks_fixed  |
[**seznamOrganicTaskGetRegular**](SerpApi.md#seznamOrganicTaskGetRegular) | **GET**  /v3/serp/seznam/organic/task_get/regular/{id}  |
[**seznamOrganicTaskGetAdvanced**](SerpApi.md#seznamOrganicTaskGetAdvanced) | **GET**  /v3/serp/seznam/organic/task_get/advanced/{id}  |
[**seznamOrganicTaskGetHtml**](SerpApi.md#seznamOrganicTaskGetHtml) | **GET**  /v3/serp/seznam/organic/task_get/html/{id}  |
[**googleFinanceExploreTaskPost**](SerpApi.md#googleFinanceExploreTaskPost) | **POST**  /v3/serp/google/finance_explore/task_post  |
[**googleFinanceExploreTasksReady**](SerpApi.md#googleFinanceExploreTasksReady) | **GET**  /v3/serp/google/finance_explore/tasks_ready  |
[**googleFinanceExploreTaskGetAdvanced**](SerpApi.md#googleFinanceExploreTaskGetAdvanced) | **GET**  /v3/serp/google/finance_explore/task_get/advanced/{id}  |
[**googleFinanceExploreTaskGetHtml**](SerpApi.md#googleFinanceExploreTaskGetHtml) | **GET**  /v3/serp/google/finance_explore/task_get/html/{id}  |
[**googleFinanceExploreLiveAdvanced**](SerpApi.md#googleFinanceExploreLiveAdvanced) | **POST**  /v3/serp/google/finance_explore/live/advanced  |
[**googleFinanceExploreLiveHtml**](SerpApi.md#googleFinanceExploreLiveHtml) | **POST**  /v3/serp/google/finance_explore/live/html  |
[**googleFinanceMarketsTaskPost**](SerpApi.md#googleFinanceMarketsTaskPost) | **POST**  /v3/serp/google/finance_markets/task_post  |
[**googleFinanceMarketsTasksReady**](SerpApi.md#googleFinanceMarketsTasksReady) | **GET**  /v3/serp/google/finance_markets/tasks_ready  |
[**googleFinanceMarketsTaskGetAdvanced**](SerpApi.md#googleFinanceMarketsTaskGetAdvanced) | **GET**  /v3/serp/google/finance_markets/task_get/advanced/{id}  |
[**googleFinanceMarketsTaskGetHtml**](SerpApi.md#googleFinanceMarketsTaskGetHtml) | **GET**  /v3/serp/google/finance_markets/task_get/html/{id}  |
[**googleFinanceMarketsLiveAdvanced**](SerpApi.md#googleFinanceMarketsLiveAdvanced) | **POST**  /v3/serp/google/finance_markets/live/advanced  |
[**googleFinanceMarketsLiveHtml**](SerpApi.md#googleFinanceMarketsLiveHtml) | **POST**  /v3/serp/google/finance_markets/live/html  |
[**googleFinanceQuoteTaskPost**](SerpApi.md#googleFinanceQuoteTaskPost) | **POST**  /v3/serp/google/finance_quote/task_post  |
[**googleFinanceQuoteTasksReady**](SerpApi.md#googleFinanceQuoteTasksReady) | **GET**  /v3/serp/google/finance_quote/tasks_ready  |
[**googleFinanceQuoteTaskGetAdvanced**](SerpApi.md#googleFinanceQuoteTaskGetAdvanced) | **GET**  /v3/serp/google/finance_quote/task_get/advanced/{id}  |
[**googleFinanceQuoteTaskGetHtml**](SerpApi.md#googleFinanceQuoteTaskGetHtml) | **GET**  /v3/serp/google/finance_quote/task_get/html/{id}  |
[**googleFinanceQuoteLiveAdvanced**](SerpApi.md#googleFinanceQuoteLiveAdvanced) | **POST**  /v3/serp/google/finance_quote/live/advanced  |
[**googleFinanceQuoteLiveHtml**](SerpApi.md#googleFinanceQuoteLiveHtml) | **POST**  /v3/serp/google/finance_quote/live/html  |
[**googleFinanceTickerSearchTaskPost**](SerpApi.md#googleFinanceTickerSearchTaskPost) | **POST**  /v3/serp/google/finance_ticker_search/task_post  |
[**googleFinanceTickerSearchTasksReady**](SerpApi.md#googleFinanceTickerSearchTasksReady) | **GET**  /v3/serp/google/finance_ticker_search/tasks_ready  |
[**googleFinanceTickerSearchTaskGetAdvanced**](SerpApi.md#googleFinanceTickerSearchTaskGetAdvanced) | **GET**  /v3/serp/google/finance_ticker_search/task_get/advanced/{id}  |
[**googleFinanceTickerSearchLiveAdvanced**](SerpApi.md#googleFinanceTickerSearchLiveAdvanced) | **POST**  /v3/serp/google/finance_ticker_search/live/advanced  |

<a id="serpIdList"></a>
# **serpIdList**
> SerpIdListResponseInfo serpIdList()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpIdListRequestInfo();
   task.datetime_from = "2025-07-14 10:23:34 +00:00";
   task.datetime_to = "2025-09-14 10:23:34 +00:00";
   task.limit = 100;
   task.offset = 0;
   task.sort = "desc";
 let response = await api.serpIdList([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpIdListRequestInfo[]&gt;**](SerpIdListRequestInfo[].md)|  | [optional] |



### Return type

[**SerpIdListResponseInfo**](SerpIdListResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpErrors"></a>
# **serpErrors**
> SerpErrorsResponseInfo serpErrors()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpErrorsRequestInfo();
   task.limit = 10;
   task.offset = 0;
   task.filtered_function = "pingback_url";
 let response = await api.serpErrors([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpErrorsRequestInfo[]&gt;**](SerpErrorsRequestInfo[].md)|  | [optional] |



### Return type

[**SerpErrorsResponseInfo**](SerpErrorsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="screenshot"></a>
# **screenshot**
> SerpScreenshotResponseInfo screenshot()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpScreenshotRequestInfo();
   task.task_id = "06211235-0696-0139-1000-36727fbd3c90";
   task.browser_screen_scale_factor = 0.5;
 let response = await api.screenshot([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpScreenshotRequestInfo[]&gt;**](SerpScreenshotRequestInfo[].md)|  | [optional] |



### Return type

[**SerpScreenshotResponseInfo**](SerpScreenshotResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="aiSummary"></a>
# **aiSummary**
> SerpAiSummaryResponseInfo aiSummary()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpAiSummaryRequestInfo();
   task.task_id = "07031739-1535-0139-0000-9d1e639a5b7d";
   task.prompt = "explain what DataForSEO is";
   task.fetch_content = true;
   task.include_links = true;
 let response = await api.aiSummary([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpAiSummaryRequestInfo[]&gt;**](SerpAiSummaryRequestInfo[].md)|  | [optional] |



### Return type

[**SerpAiSummaryResponseInfo**](SerpAiSummaryResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpGoogleLocations"></a>
# **serpGoogleLocations**
> SerpGoogleLocationsResponseInfo serpGoogleLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.serpGoogleLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleLocationsResponseInfo**](SerpGoogleLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpGoogleLocationsCountry"></a>
# **serpGoogleLocationsCountry**
> SerpGoogleLocationsCountryResponseInfo serpGoogleLocationsCountry()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let country = "us";
 let response = await api.serpGoogleLocationsCountry(country);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleLocationsCountryResponseInfo**](SerpGoogleLocationsCountryResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpGoogleLanguages"></a>
# **serpGoogleLanguages**
> SerpGoogleLanguagesResponseInfo serpGoogleLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.serpGoogleLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleLanguagesResponseInfo**](SerpGoogleLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleOrganicTaskPost"></a>
# **googleOrganicTaskPost**
> SerpGoogleOrganicTaskPostResponseInfo googleOrganicTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleOrganicTaskPostRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleOrganicTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleOrganicTaskPostRequestInfo[]&gt;**](SerpGoogleOrganicTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleOrganicTaskPostResponseInfo**](SerpGoogleOrganicTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleOrganicTasksReady"></a>
# **googleOrganicTasksReady**
> SerpGoogleOrganicTasksReadyResponseInfo googleOrganicTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleOrganicTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleOrganicTasksReadyResponseInfo**](SerpGoogleOrganicTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="tasksReady"></a>
# **tasksReady**
> SerpTasksReadyResponseInfo tasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.tasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpTasksReadyResponseInfo**](SerpTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleOrganicTasksFixed"></a>
# **googleOrganicTasksFixed**
> SerpGoogleOrganicTasksFixedResponseInfo googleOrganicTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleOrganicTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleOrganicTasksFixedResponseInfo**](SerpGoogleOrganicTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleOrganicTaskGetRegular"></a>
# **googleOrganicTaskGetRegular**
> SerpGoogleOrganicTaskGetRegularResponseInfo googleOrganicTaskGetRegular()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleOrganicTaskGetRegular(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleOrganicTaskGetRegularResponseInfo**](SerpGoogleOrganicTaskGetRegularResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleOrganicTaskGetAdvanced"></a>
# **googleOrganicTaskGetAdvanced**
> SerpGoogleOrganicTaskGetAdvancedResponseInfo googleOrganicTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleOrganicTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleOrganicTaskGetAdvancedResponseInfo**](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleOrganicTaskGetHtml"></a>
# **googleOrganicTaskGetHtml**
> SerpGoogleOrganicTaskGetHtmlResponseInfo googleOrganicTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleOrganicTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleOrganicTaskGetHtmlResponseInfo**](SerpGoogleOrganicTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleOrganicLiveRegular"></a>
# **googleOrganicLiveRegular**
> SerpGoogleOrganicLiveRegularResponseInfo googleOrganicLiveRegular()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleOrganicLiveRegularRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleOrganicLiveRegular([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleOrganicLiveRegularRequestInfo[]&gt;**](SerpGoogleOrganicLiveRegularRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleOrganicLiveRegularResponseInfo**](SerpGoogleOrganicLiveRegularResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleOrganicLiveAdvanced"></a>
# **googleOrganicLiveAdvanced**
> SerpGoogleOrganicLiveAdvancedResponseInfo googleOrganicLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleOrganicLiveAdvancedRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
   task.calculate_rectangles = true;
 let response = await api.googleOrganicLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleOrganicLiveAdvancedRequestInfo[]&gt;**](SerpGoogleOrganicLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleOrganicLiveAdvancedResponseInfo**](SerpGoogleOrganicLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleOrganicLiveHtml"></a>
# **googleOrganicLiveHtml**
> SerpGoogleOrganicLiveHtmlResponseInfo googleOrganicLiveHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleOrganicLiveHtmlRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleOrganicLiveHtml([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleOrganicLiveHtmlRequestInfo[]&gt;**](SerpGoogleOrganicLiveHtmlRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleOrganicLiveHtmlResponseInfo**](SerpGoogleOrganicLiveHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpGoogleAiModeLanguages"></a>
# **serpGoogleAiModeLanguages**
> SerpGoogleAiModeLanguagesResponseInfo serpGoogleAiModeLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.serpGoogleAiModeLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleAiModeLanguagesResponseInfo**](SerpGoogleAiModeLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAiModeTaskPost"></a>
# **googleAiModeTaskPost**
> SerpGoogleAiModeTaskPostResponseInfo googleAiModeTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleAiModeTaskPostRequestInfo();
   task.keyword = "what is google ai mode";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleAiModeTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleAiModeTaskPostRequestInfo[]&gt;**](SerpGoogleAiModeTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleAiModeTaskPostResponseInfo**](SerpGoogleAiModeTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAiModeTasksReady"></a>
# **googleAiModeTasksReady**
> SerpGoogleAiModeTasksReadyResponseInfo googleAiModeTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleAiModeTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleAiModeTasksReadyResponseInfo**](SerpGoogleAiModeTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAiModeTasksFixed"></a>
# **googleAiModeTasksFixed**
> SerpGoogleAiModeTasksFixedResponseInfo googleAiModeTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleAiModeTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleAiModeTasksFixedResponseInfo**](SerpGoogleAiModeTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAiModeTaskGetAdvanced"></a>
# **googleAiModeTaskGetAdvanced**
> SerpGoogleAiModeTaskGetAdvancedResponseInfo googleAiModeTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleAiModeTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleAiModeTaskGetAdvancedResponseInfo**](SerpGoogleAiModeTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAiModeTaskGetHtml"></a>
# **googleAiModeTaskGetHtml**
> SerpGoogleAiModeTaskGetHtmlResponseInfo googleAiModeTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleAiModeTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleAiModeTaskGetHtmlResponseInfo**](SerpGoogleAiModeTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAiModeLiveAdvanced"></a>
# **googleAiModeLiveAdvanced**
> SerpGoogleAiModeLiveAdvancedResponseInfo googleAiModeLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleAiModeLiveAdvancedRequestInfo();
   task.keyword = "what is google ai mode";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleAiModeLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleAiModeLiveAdvancedRequestInfo[]&gt;**](SerpGoogleAiModeLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleAiModeLiveAdvancedResponseInfo**](SerpGoogleAiModeLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAiModeLiveHtml"></a>
# **googleAiModeLiveHtml**
> SerpGoogleAiModeLiveHtmlResponseInfo googleAiModeLiveHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleAiModeLiveHtmlRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleAiModeLiveHtml([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleAiModeLiveHtmlRequestInfo[]&gt;**](SerpGoogleAiModeLiveHtmlRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleAiModeLiveHtmlResponseInfo**](SerpGoogleAiModeLiveHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleMapsTaskPost"></a>
# **googleMapsTaskPost**
> SerpGoogleMapsTaskPostResponseInfo googleMapsTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleMapsTaskPostRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleMapsTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleMapsTaskPostRequestInfo[]&gt;**](SerpGoogleMapsTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleMapsTaskPostResponseInfo**](SerpGoogleMapsTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleMapsTasksReady"></a>
# **googleMapsTasksReady**
> SerpGoogleMapsTasksReadyResponseInfo googleMapsTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleMapsTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleMapsTasksReadyResponseInfo**](SerpGoogleMapsTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleMapsTasksFixed"></a>
# **googleMapsTasksFixed**
> SerpGoogleMapsTasksFixedResponseInfo googleMapsTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleMapsTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleMapsTasksFixedResponseInfo**](SerpGoogleMapsTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleMapsTaskGetAdvanced"></a>
# **googleMapsTaskGetAdvanced**
> SerpGoogleMapsTaskGetAdvancedResponseInfo googleMapsTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleMapsTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleMapsTaskGetAdvancedResponseInfo**](SerpGoogleMapsTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleMapsLiveAdvanced"></a>
# **googleMapsLiveAdvanced**
> SerpGoogleMapsLiveAdvancedResponseInfo googleMapsLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleMapsLiveAdvancedRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleMapsLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleMapsLiveAdvancedRequestInfo[]&gt;**](SerpGoogleMapsLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleMapsLiveAdvancedResponseInfo**](SerpGoogleMapsLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleLocalFinderTaskPost"></a>
# **googleLocalFinderTaskPost**
> SerpGoogleLocalFinderTaskPostResponseInfo googleLocalFinderTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleLocalFinderTaskPostRequestInfo();
   task.keyword = "local nail services";
   task.location_code = 2840;
   task.language_code = "en";
   task.min_rating = 4.5;
   task.time_filter = "monday";
 let response = await api.googleLocalFinderTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleLocalFinderTaskPostRequestInfo[]&gt;**](SerpGoogleLocalFinderTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleLocalFinderTaskPostResponseInfo**](SerpGoogleLocalFinderTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleLocalFinderTasksReady"></a>
# **googleLocalFinderTasksReady**
> SerpGoogleLocalFinderTasksReadyResponseInfo googleLocalFinderTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleLocalFinderTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleLocalFinderTasksReadyResponseInfo**](SerpGoogleLocalFinderTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleLocalFinderTasksFixed"></a>
# **googleLocalFinderTasksFixed**
> SerpGoogleLocalFinderTasksFixedResponseInfo googleLocalFinderTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleLocalFinderTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleLocalFinderTasksFixedResponseInfo**](SerpGoogleLocalFinderTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleLocalFinderTaskGetAdvanced"></a>
# **googleLocalFinderTaskGetAdvanced**
> SerpGoogleLocalFinderTaskGetAdvancedResponseInfo googleLocalFinderTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleLocalFinderTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleLocalFinderTaskGetAdvancedResponseInfo**](SerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleLocalFinderTaskGetHtml"></a>
# **googleLocalFinderTaskGetHtml**
> SerpGoogleLocalFinderTaskGetHtmlResponseInfo googleLocalFinderTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleLocalFinderTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleLocalFinderTaskGetHtmlResponseInfo**](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleLocalFinderLiveAdvanced"></a>
# **googleLocalFinderLiveAdvanced**
> SerpGoogleLocalFinderLiveAdvancedResponseInfo googleLocalFinderLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleLocalFinderLiveAdvancedRequestInfo();
   task.keyword = "local nail services";
   task.location_code = 2840;
   task.language_code = "en";
   task.min_rating = 4.5;
   task.time_filter = "monday";
 let response = await api.googleLocalFinderLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleLocalFinderLiveAdvancedRequestInfo[]&gt;**](SerpGoogleLocalFinderLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleLocalFinderLiveAdvancedResponseInfo**](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleLocalFinderLiveHtml"></a>
# **googleLocalFinderLiveHtml**
> SerpGoogleLocalFinderLiveHtmlResponseInfo googleLocalFinderLiveHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleLocalFinderLiveHtmlRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleLocalFinderLiveHtml([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleLocalFinderLiveHtmlRequestInfo[]&gt;**](SerpGoogleLocalFinderLiveHtmlRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleLocalFinderLiveHtmlResponseInfo**](SerpGoogleLocalFinderLiveHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleNewsTaskPost"></a>
# **googleNewsTaskPost**
> SerpGoogleNewsTaskPostResponseInfo googleNewsTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleNewsTaskPostRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleNewsTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleNewsTaskPostRequestInfo[]&gt;**](SerpGoogleNewsTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleNewsTaskPostResponseInfo**](SerpGoogleNewsTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleNewsTasksReady"></a>
# **googleNewsTasksReady**
> SerpGoogleNewsTasksReadyResponseInfo googleNewsTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleNewsTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleNewsTasksReadyResponseInfo**](SerpGoogleNewsTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleNewsTasksFixed"></a>
# **googleNewsTasksFixed**
> SerpGoogleNewsTasksFixedResponseInfo googleNewsTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleNewsTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleNewsTasksFixedResponseInfo**](SerpGoogleNewsTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleNewsTaskGetAdvanced"></a>
# **googleNewsTaskGetAdvanced**
> SerpGoogleNewsTaskGetAdvancedResponseInfo googleNewsTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleNewsTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleNewsTaskGetAdvancedResponseInfo**](SerpGoogleNewsTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleNewsTaskGetHtml"></a>
# **googleNewsTaskGetHtml**
> SerpGoogleNewsTaskGetHtmlResponseInfo googleNewsTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleNewsTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleNewsTaskGetHtmlResponseInfo**](SerpGoogleNewsTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleNewsLiveAdvanced"></a>
# **googleNewsLiveAdvanced**
> SerpGoogleNewsLiveAdvancedResponseInfo googleNewsLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleNewsLiveAdvancedRequestInfo();
   task.keyword = "android";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleNewsLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleNewsLiveAdvancedRequestInfo[]&gt;**](SerpGoogleNewsLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleNewsLiveAdvancedResponseInfo**](SerpGoogleNewsLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleNewsLiveHtml"></a>
# **googleNewsLiveHtml**
> SerpGoogleNewsLiveHtmlResponseInfo googleNewsLiveHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleNewsLiveHtmlRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleNewsLiveHtml([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleNewsLiveHtmlRequestInfo[]&gt;**](SerpGoogleNewsLiveHtmlRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleNewsLiveHtmlResponseInfo**](SerpGoogleNewsLiveHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleEventsTaskPost"></a>
# **googleEventsTaskPost**
> SerpGoogleEventsTaskPostResponseInfo googleEventsTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleEventsTaskPostRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleEventsTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleEventsTaskPostRequestInfo[]&gt;**](SerpGoogleEventsTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleEventsTaskPostResponseInfo**](SerpGoogleEventsTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleEventsTasksReady"></a>
# **googleEventsTasksReady**
> SerpGoogleEventsTasksReadyResponseInfo googleEventsTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleEventsTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleEventsTasksReadyResponseInfo**](SerpGoogleEventsTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleEventsTasksFixed"></a>
# **googleEventsTasksFixed**
> SerpGoogleEventsTasksFixedResponseInfo googleEventsTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleEventsTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleEventsTasksFixedResponseInfo**](SerpGoogleEventsTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleEventsTaskGetAdvanced"></a>
# **googleEventsTaskGetAdvanced**
> SerpGoogleEventsTaskGetAdvancedResponseInfo googleEventsTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleEventsTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleEventsTaskGetAdvancedResponseInfo**](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleEventsLiveAdvanced"></a>
# **googleEventsLiveAdvanced**
> SerpGoogleEventsLiveAdvancedResponseInfo googleEventsLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleEventsLiveAdvancedRequestInfo();
   task.keyword = "concerts";
   task.location_name = "Los Angeles,California,United States";
   task.date_range = "today";
 let response = await api.googleEventsLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleEventsLiveAdvancedRequestInfo[]&gt;**](SerpGoogleEventsLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleEventsLiveAdvancedResponseInfo**](SerpGoogleEventsLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleImagesTaskPost"></a>
# **googleImagesTaskPost**
> SerpGoogleImagesTaskPostResponseInfo googleImagesTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleImagesTaskPostRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleImagesTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleImagesTaskPostRequestInfo[]&gt;**](SerpGoogleImagesTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleImagesTaskPostResponseInfo**](SerpGoogleImagesTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleImagesTasksReady"></a>
# **googleImagesTasksReady**
> SerpGoogleImagesTasksReadyResponseInfo googleImagesTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleImagesTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleImagesTasksReadyResponseInfo**](SerpGoogleImagesTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleImagesTasksFixed"></a>
# **googleImagesTasksFixed**
> SerpGoogleImagesTasksFixedResponseInfo googleImagesTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleImagesTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleImagesTasksFixedResponseInfo**](SerpGoogleImagesTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleImagesTaskGetAdvanced"></a>
# **googleImagesTaskGetAdvanced**
> SerpGoogleImagesTaskGetAdvancedResponseInfo googleImagesTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleImagesTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleImagesTaskGetAdvancedResponseInfo**](SerpGoogleImagesTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleImagesTaskGetHtml"></a>
# **googleImagesTaskGetHtml**
> SerpGoogleImagesTaskGetHtmlResponseInfo googleImagesTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleImagesTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleImagesTaskGetHtmlResponseInfo**](SerpGoogleImagesTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleImagesLiveAdvanced"></a>
# **googleImagesLiveAdvanced**
> SerpGoogleImagesLiveAdvancedResponseInfo googleImagesLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleImagesLiveAdvancedRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleImagesLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleImagesLiveAdvancedRequestInfo[]&gt;**](SerpGoogleImagesLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleImagesLiveAdvancedResponseInfo**](SerpGoogleImagesLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleImagesLiveHtml"></a>
# **googleImagesLiveHtml**
> SerpGoogleImagesLiveHtmlResponseInfo googleImagesLiveHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleImagesLiveHtmlRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleImagesLiveHtml([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleImagesLiveHtmlRequestInfo[]&gt;**](SerpGoogleImagesLiveHtmlRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleImagesLiveHtmlResponseInfo**](SerpGoogleImagesLiveHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleSearchByImageTaskPost"></a>
# **googleSearchByImageTaskPost**
> SerpGoogleSearchByImageTaskPostResponseInfo googleSearchByImageTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleSearchByImageTaskPostRequestInfo();
   task.image_url = "https://dataforseo.com/wp-content/uploads/2016/11/data_for_seo_light_429.png";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleSearchByImageTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleSearchByImageTaskPostRequestInfo[]&gt;**](SerpGoogleSearchByImageTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleSearchByImageTaskPostResponseInfo**](SerpGoogleSearchByImageTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleSearchByImageTasksReady"></a>
# **googleSearchByImageTasksReady**
> SerpGoogleSearchByImageTasksReadyResponseInfo googleSearchByImageTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleSearchByImageTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleSearchByImageTasksReadyResponseInfo**](SerpGoogleSearchByImageTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleSearchByImageTasksFixed"></a>
# **googleSearchByImageTasksFixed**
> SerpGoogleSearchByImageTasksFixedResponseInfo googleSearchByImageTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleSearchByImageTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleSearchByImageTasksFixedResponseInfo**](SerpGoogleSearchByImageTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleSearchByImageTaskGetAdvanced"></a>
# **googleSearchByImageTaskGetAdvanced**
> SerpGoogleSearchByImageTaskGetAdvancedResponseInfo googleSearchByImageTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleSearchByImageTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleSearchByImageTaskGetAdvancedResponseInfo**](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleJobsTaskPost"></a>
# **googleJobsTaskPost**
> SerpGoogleJobsTaskPostResponseInfo googleJobsTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleJobsTaskPostRequestInfo();
   task.keyword = ".net developer";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleJobsTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleJobsTaskPostRequestInfo[]&gt;**](SerpGoogleJobsTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleJobsTaskPostResponseInfo**](SerpGoogleJobsTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleJobsTasksReady"></a>
# **googleJobsTasksReady**
> SerpGoogleJobsTasksReadyResponseInfo googleJobsTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleJobsTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleJobsTasksReadyResponseInfo**](SerpGoogleJobsTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleJobsTasksFixed"></a>
# **googleJobsTasksFixed**
> SerpGoogleJobsTasksFixedResponseInfo googleJobsTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleJobsTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleJobsTasksFixedResponseInfo**](SerpGoogleJobsTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleJobsTaskGetAdvanced"></a>
# **googleJobsTaskGetAdvanced**
> SerpGoogleJobsTaskGetAdvancedResponseInfo googleJobsTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleJobsTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleJobsTaskGetAdvancedResponseInfo**](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleJobsTaskGetHtml"></a>
# **googleJobsTaskGetHtml**
> SerpGoogleJobsTaskGetHtmlResponseInfo googleJobsTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleJobsTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleJobsTaskGetHtmlResponseInfo**](SerpGoogleJobsTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAutocompleteTaskPost"></a>
# **googleAutocompleteTaskPost**
> SerpGoogleAutocompleteTaskPostResponseInfo googleAutocompleteTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleAutocompleteTaskPostRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
   task.cursor_pointer = 6;
 let response = await api.googleAutocompleteTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleAutocompleteTaskPostRequestInfo[]&gt;**](SerpGoogleAutocompleteTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleAutocompleteTaskPostResponseInfo**](SerpGoogleAutocompleteTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAutocompleteTasksReady"></a>
# **googleAutocompleteTasksReady**
> SerpGoogleAutocompleteTasksReadyResponseInfo googleAutocompleteTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleAutocompleteTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleAutocompleteTasksReadyResponseInfo**](SerpGoogleAutocompleteTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAutocompleteTasksFixed"></a>
# **googleAutocompleteTasksFixed**
> SerpGoogleAutocompleteTasksFixedResponseInfo googleAutocompleteTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleAutocompleteTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleAutocompleteTasksFixedResponseInfo**](SerpGoogleAutocompleteTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAutocompleteTaskGetAdvanced"></a>
# **googleAutocompleteTaskGetAdvanced**
> SerpGoogleAutocompleteTaskGetAdvancedResponseInfo googleAutocompleteTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleAutocompleteTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleAutocompleteTaskGetAdvancedResponseInfo**](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAutocompleteLiveAdvanced"></a>
# **googleAutocompleteLiveAdvanced**
> SerpGoogleAutocompleteLiveAdvancedResponseInfo googleAutocompleteLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleAutocompleteLiveAdvancedRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
   task.client = "gws-wiz-serp";
 let response = await api.googleAutocompleteLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleAutocompleteLiveAdvancedRequestInfo[]&gt;**](SerpGoogleAutocompleteLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleAutocompleteLiveAdvancedResponseInfo**](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleDatasetSearchTaskPost"></a>
# **googleDatasetSearchTaskPost**
> SerpGoogleDatasetSearchTaskPostResponseInfo googleDatasetSearchTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleDatasetSearchTaskPostRequestInfo();
   task.keyword = "water quality";
   task.last_updated = "1m";
   task.file_formats = [
       "archive",
       "image",
   ];
   task.usage_rights = "noncommercial";
   task.is_free = true;
   task.topics = [
       "natural_sciences",
       "geo",
   ];
 let response = await api.googleDatasetSearchTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleDatasetSearchTaskPostRequestInfo[]&gt;**](SerpGoogleDatasetSearchTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleDatasetSearchTaskPostResponseInfo**](SerpGoogleDatasetSearchTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleDatasetSearchTasksReady"></a>
# **googleDatasetSearchTasksReady**
> SerpGoogleDatasetSearchTasksReadyResponseInfo googleDatasetSearchTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleDatasetSearchTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleDatasetSearchTasksReadyResponseInfo**](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleDatasetSearchTasksFixed"></a>
# **googleDatasetSearchTasksFixed**
> SerpGoogleDatasetSearchTasksFixedResponseInfo googleDatasetSearchTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleDatasetSearchTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleDatasetSearchTasksFixedResponseInfo**](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleDatasetSearchTaskGetAdvanced"></a>
# **googleDatasetSearchTaskGetAdvanced**
> SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo googleDatasetSearchTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleDatasetSearchTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo**](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleDatasetSearchLiveAdvanced"></a>
# **googleDatasetSearchLiveAdvanced**
> SerpGoogleDatasetSearchLiveAdvancedResponseInfo googleDatasetSearchLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleDatasetSearchLiveAdvancedRequestInfo();
   task.keyword = "water quality";
   task.last_updated = "1m";
   task.file_formats = [
       "archive",
       "image",
   ];
   task.usage_rights = "noncommercial";
   task.is_free = true;
   task.topics = [
       "natural_sciences",
       "geo",
   ];
 let response = await api.googleDatasetSearchLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleDatasetSearchLiveAdvancedRequestInfo[]&gt;**](SerpGoogleDatasetSearchLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleDatasetSearchLiveAdvancedResponseInfo**](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleDatasetInfoTaskPost"></a>
# **googleDatasetInfoTaskPost**
> SerpGoogleDatasetInfoTaskPostResponseInfo googleDatasetInfoTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleDatasetInfoTaskPostRequestInfo();
   task.dataset_id = "L2cvMTFqbl85ZHN6MQ==";
 let response = await api.googleDatasetInfoTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleDatasetInfoTaskPostRequestInfo[]&gt;**](SerpGoogleDatasetInfoTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleDatasetInfoTaskPostResponseInfo**](SerpGoogleDatasetInfoTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleDatasetInfoTasksReady"></a>
# **googleDatasetInfoTasksReady**
> SerpGoogleDatasetInfoTasksReadyResponseInfo googleDatasetInfoTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleDatasetInfoTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleDatasetInfoTasksReadyResponseInfo**](SerpGoogleDatasetInfoTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleDatasetInfoTasksFixed"></a>
# **googleDatasetInfoTasksFixed**
> SerpGoogleDatasetInfoTasksFixedResponseInfo googleDatasetInfoTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleDatasetInfoTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleDatasetInfoTasksFixedResponseInfo**](SerpGoogleDatasetInfoTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleDatasetInfoTaskGetAdvanced"></a>
# **googleDatasetInfoTaskGetAdvanced**
> SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo googleDatasetInfoTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleDatasetInfoTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo**](SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleDatasetInfoLiveAdvanced"></a>
# **googleDatasetInfoLiveAdvanced**
> SerpGoogleDatasetInfoLiveAdvancedResponseInfo googleDatasetInfoLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleDatasetInfoLiveAdvancedRequestInfo();
   task.dataset_id = "L2cvMTFqbl85ZHN6MQ==";
 let response = await api.googleDatasetInfoLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleDatasetInfoLiveAdvancedRequestInfo[]&gt;**](SerpGoogleDatasetInfoLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleDatasetInfoLiveAdvancedResponseInfo**](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpGoogleAdsAdvertisersLocations"></a>
# **serpGoogleAdsAdvertisersLocations**
> SerpGoogleAdsAdvertisersLocationsResponseInfo serpGoogleAdsAdvertisersLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.serpGoogleAdsAdvertisersLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleAdsAdvertisersLocationsResponseInfo**](SerpGoogleAdsAdvertisersLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsAdvertisersTaskPost"></a>
# **googleAdsAdvertisersTaskPost**
> SerpGoogleAdsAdvertisersTaskPostResponseInfo googleAdsAdvertisersTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleAdsAdvertisersTaskPostRequestInfo();
   task.keyword = "apple";
   task.location_code = 2840;
 let response = await api.googleAdsAdvertisersTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleAdsAdvertisersTaskPostRequestInfo[]&gt;**](SerpGoogleAdsAdvertisersTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleAdsAdvertisersTaskPostResponseInfo**](SerpGoogleAdsAdvertisersTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsAdvertisersTasksReady"></a>
# **googleAdsAdvertisersTasksReady**
> SerpGoogleAdsAdvertisersTasksReadyResponseInfo googleAdsAdvertisersTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleAdsAdvertisersTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleAdsAdvertisersTasksReadyResponseInfo**](SerpGoogleAdsAdvertisersTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsAdvertisersTaskGetAdvanced"></a>
# **googleAdsAdvertisersTaskGetAdvanced**
> SerpGoogleAdsAdvertisersTaskGetAdvancedResponseInfo googleAdsAdvertisersTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleAdsAdvertisersTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleAdsAdvertisersTaskGetAdvancedResponseInfo**](SerpGoogleAdsAdvertisersTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpGoogleAdsSearchLocations"></a>
# **serpGoogleAdsSearchLocations**
> SerpGoogleAdsSearchLocationsResponseInfo serpGoogleAdsSearchLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.serpGoogleAdsSearchLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleAdsSearchLocationsResponseInfo**](SerpGoogleAdsSearchLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsSearchTaskPost"></a>
# **googleAdsSearchTaskPost**
> SerpGoogleAdsSearchTaskPostResponseInfo googleAdsSearchTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleAdsSearchTaskPostRequestInfo();
   task.advertiser_ids = [
       "AR13752565271262920705",
       "AR02439908557932462081",
   ];
   task.location_code = 2840;
   task.platform = "google_search";
 let response = await api.googleAdsSearchTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleAdsSearchTaskPostRequestInfo[]&gt;**](SerpGoogleAdsSearchTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleAdsSearchTaskPostResponseInfo**](SerpGoogleAdsSearchTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsSearchTasksReady"></a>
# **googleAdsSearchTasksReady**
> SerpGoogleAdsSearchTasksReadyResponseInfo googleAdsSearchTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleAdsSearchTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleAdsSearchTasksReadyResponseInfo**](SerpGoogleAdsSearchTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleAdsSearchTaskGetAdvanced"></a>
# **googleAdsSearchTaskGetAdvanced**
> SerpGoogleAdsSearchTaskGetAdvancedResponseInfo googleAdsSearchTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleAdsSearchTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleAdsSearchTaskGetAdvancedResponseInfo**](SerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpBingLocations"></a>
# **serpBingLocations**
> SerpBingLocationsResponseInfo serpBingLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.serpBingLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBingLocationsResponseInfo**](SerpBingLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpBingLocationsCountry"></a>
# **serpBingLocationsCountry**
> SerpBingLocationsCountryResponseInfo serpBingLocationsCountry()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let country = "us";
 let response = await api.serpBingLocationsCountry(country);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBingLocationsCountryResponseInfo**](SerpBingLocationsCountryResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpBingLanguages"></a>
# **serpBingLanguages**
> SerpBingLanguagesResponseInfo serpBingLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.serpBingLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBingLanguagesResponseInfo**](SerpBingLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingOrganicTaskPost"></a>
# **bingOrganicTaskPost**
> SerpBingOrganicTaskPostResponseInfo bingOrganicTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpBingOrganicTaskPostRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.bingOrganicTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpBingOrganicTaskPostRequestInfo[]&gt;**](SerpBingOrganicTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpBingOrganicTaskPostResponseInfo**](SerpBingOrganicTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingOrganicTasksReady"></a>
# **bingOrganicTasksReady**
> SerpBingOrganicTasksReadyResponseInfo bingOrganicTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.bingOrganicTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBingOrganicTasksReadyResponseInfo**](SerpBingOrganicTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingOrganicTasksFixed"></a>
# **bingOrganicTasksFixed**
> SerpBingOrganicTasksFixedResponseInfo bingOrganicTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.bingOrganicTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBingOrganicTasksFixedResponseInfo**](SerpBingOrganicTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingOrganicTaskGetRegular"></a>
# **bingOrganicTaskGetRegular**
> SerpBingOrganicTaskGetRegularResponseInfo bingOrganicTaskGetRegular()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.bingOrganicTaskGetRegular(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBingOrganicTaskGetRegularResponseInfo**](SerpBingOrganicTaskGetRegularResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingOrganicTaskGetAdvanced"></a>
# **bingOrganicTaskGetAdvanced**
> SerpBingOrganicTaskGetAdvancedResponseInfo bingOrganicTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.bingOrganicTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBingOrganicTaskGetAdvancedResponseInfo**](SerpBingOrganicTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingOrganicTaskGetHtml"></a>
# **bingOrganicTaskGetHtml**
> SerpBingOrganicTaskGetHtmlResponseInfo bingOrganicTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.bingOrganicTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBingOrganicTaskGetHtmlResponseInfo**](SerpBingOrganicTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingOrganicLiveRegular"></a>
# **bingOrganicLiveRegular**
> SerpBingOrganicLiveRegularResponseInfo bingOrganicLiveRegular()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpBingOrganicLiveRegularRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.bingOrganicLiveRegular([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpBingOrganicLiveRegularRequestInfo[]&gt;**](SerpBingOrganicLiveRegularRequestInfo[].md)|  | [optional] |



### Return type

[**SerpBingOrganicLiveRegularResponseInfo**](SerpBingOrganicLiveRegularResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingOrganicLiveAdvanced"></a>
# **bingOrganicLiveAdvanced**
> SerpBingOrganicLiveAdvancedResponseInfo bingOrganicLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpBingOrganicLiveAdvancedRequestInfo();
   task.keyword = "flight ticket new york san francisco";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.bingOrganicLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpBingOrganicLiveAdvancedRequestInfo[]&gt;**](SerpBingOrganicLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**SerpBingOrganicLiveAdvancedResponseInfo**](SerpBingOrganicLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingOrganicLiveHtml"></a>
# **bingOrganicLiveHtml**
> SerpBingOrganicLiveHtmlResponseInfo bingOrganicLiveHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpBingOrganicLiveHtmlRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.bingOrganicLiveHtml([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpBingOrganicLiveHtmlRequestInfo[]&gt;**](SerpBingOrganicLiveHtmlRequestInfo[].md)|  | [optional] |



### Return type

[**SerpBingOrganicLiveHtmlResponseInfo**](SerpBingOrganicLiveHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingLocalPackTaskPost"></a>
# **bingLocalPackTaskPost**
> SerpBingLocalPackTaskPostResponseInfo bingLocalPackTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpBingLocalPackTaskPostRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.bingLocalPackTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpBingLocalPackTaskPostRequestInfo[]&gt;**](SerpBingLocalPackTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpBingLocalPackTaskPostResponseInfo**](SerpBingLocalPackTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingLocalPackTasksReady"></a>
# **bingLocalPackTasksReady**
> SerpBingLocalPackTasksReadyResponseInfo bingLocalPackTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.bingLocalPackTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBingLocalPackTasksReadyResponseInfo**](SerpBingLocalPackTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingLocalPackTasksFixed"></a>
# **bingLocalPackTasksFixed**
> SerpBingLocalPackTasksFixedResponseInfo bingLocalPackTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.bingLocalPackTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBingLocalPackTasksFixedResponseInfo**](SerpBingLocalPackTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingLocalPackTaskGetRegular"></a>
# **bingLocalPackTaskGetRegular**
> SerpBingLocalPackTaskGetRegularResponseInfo bingLocalPackTaskGetRegular()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.bingLocalPackTaskGetRegular(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBingLocalPackTaskGetRegularResponseInfo**](SerpBingLocalPackTaskGetRegularResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingLocalPackTaskGetHtml"></a>
# **bingLocalPackTaskGetHtml**
> SerpBingLocalPackTaskGetHtmlResponseInfo bingLocalPackTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.bingLocalPackTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBingLocalPackTaskGetHtmlResponseInfo**](SerpBingLocalPackTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingLocalPackLiveRegular"></a>
# **bingLocalPackLiveRegular**
> SerpBingLocalPackLiveRegularResponseInfo bingLocalPackLiveRegular()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpBingLocalPackLiveRegularRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.bingLocalPackLiveRegular([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpBingLocalPackLiveRegularRequestInfo[]&gt;**](SerpBingLocalPackLiveRegularRequestInfo[].md)|  | [optional] |



### Return type

[**SerpBingLocalPackLiveRegularResponseInfo**](SerpBingLocalPackLiveRegularResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="bingLocalPackLiveHtml"></a>
# **bingLocalPackLiveHtml**
> SerpBingLocalPackLiveHtmlResponseInfo bingLocalPackLiveHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpBingLocalPackLiveHtmlRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.bingLocalPackLiveHtml([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpBingLocalPackLiveHtmlRequestInfo[]&gt;**](SerpBingLocalPackLiveHtmlRequestInfo[].md)|  | [optional] |



### Return type

[**SerpBingLocalPackLiveHtmlResponseInfo**](SerpBingLocalPackLiveHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpYoutubeLocations"></a>
# **serpYoutubeLocations**
> SerpYoutubeLocationsResponseInfo serpYoutubeLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.serpYoutubeLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYoutubeLocationsResponseInfo**](SerpYoutubeLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpYoutubeLocationsCountry"></a>
# **serpYoutubeLocationsCountry**
> SerpYoutubeLocationsCountryResponseInfo serpYoutubeLocationsCountry()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let country = "us";
 let response = await api.serpYoutubeLocationsCountry(country);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYoutubeLocationsCountryResponseInfo**](SerpYoutubeLocationsCountryResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpYoutubeLanguages"></a>
# **serpYoutubeLanguages**
> SerpYoutubeLanguagesResponseInfo serpYoutubeLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.serpYoutubeLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYoutubeLanguagesResponseInfo**](SerpYoutubeLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="youtubeVideoInfoTaskPost"></a>
# **youtubeVideoInfoTaskPost**
> SerpYoutubeVideoInfoTaskPostResponseInfo youtubeVideoInfoTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpYoutubeVideoInfoTaskPostRequestInfo();
   task.video_id = "vQXvyV0zIP4";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.youtubeVideoInfoTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpYoutubeVideoInfoTaskPostRequestInfo[]&gt;**](SerpYoutubeVideoInfoTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpYoutubeVideoInfoTaskPostResponseInfo**](SerpYoutubeVideoInfoTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="youtubeVideoInfoTasksReady"></a>
# **youtubeVideoInfoTasksReady**
> SerpYoutubeVideoInfoTasksReadyResponseInfo youtubeVideoInfoTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.youtubeVideoInfoTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYoutubeVideoInfoTasksReadyResponseInfo**](SerpYoutubeVideoInfoTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="youtubeVideoInfoTasksFixed"></a>
# **youtubeVideoInfoTasksFixed**
> SerpYoutubeVideoInfoTasksFixedResponseInfo youtubeVideoInfoTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.youtubeVideoInfoTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYoutubeVideoInfoTasksFixedResponseInfo**](SerpYoutubeVideoInfoTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="youtubeVideoInfoTaskGetAdvanced"></a>
# **youtubeVideoInfoTaskGetAdvanced**
> SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo youtubeVideoInfoTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.youtubeVideoInfoTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo**](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="youtubeVideoInfoLiveAdvanced"></a>
# **youtubeVideoInfoLiveAdvanced**
> SerpYoutubeVideoInfoLiveAdvancedResponseInfo youtubeVideoInfoLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpYoutubeVideoInfoLiveAdvancedRequestInfo();
   task.video_id = "vQXvyV0zIP4";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.youtubeVideoInfoLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpYoutubeVideoInfoLiveAdvancedRequestInfo[]&gt;**](SerpYoutubeVideoInfoLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**SerpYoutubeVideoInfoLiveAdvancedResponseInfo**](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="youtubeVideoSubtitlesTaskPost"></a>
# **youtubeVideoSubtitlesTaskPost**
> SerpYoutubeVideoSubtitlesTaskPostResponseInfo youtubeVideoSubtitlesTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpYoutubeVideoSubtitlesTaskPostRequestInfo();
   task.video_id = "Y8Wu4rSNJms";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.youtubeVideoSubtitlesTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpYoutubeVideoSubtitlesTaskPostRequestInfo[]&gt;**](SerpYoutubeVideoSubtitlesTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpYoutubeVideoSubtitlesTaskPostResponseInfo**](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="youtubeVideoSubtitlesTasksReady"></a>
# **youtubeVideoSubtitlesTasksReady**
> SerpYoutubeVideoSubtitlesTasksReadyResponseInfo youtubeVideoSubtitlesTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.youtubeVideoSubtitlesTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYoutubeVideoSubtitlesTasksReadyResponseInfo**](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="youtubeVideoSubtitlesTasksFixed"></a>
# **youtubeVideoSubtitlesTasksFixed**
> SerpYoutubeVideoSubtitlesTasksFixedResponseInfo youtubeVideoSubtitlesTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.youtubeVideoSubtitlesTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYoutubeVideoSubtitlesTasksFixedResponseInfo**](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="youtubeVideoSubtitlesTaskGetAdvanced"></a>
# **youtubeVideoSubtitlesTaskGetAdvanced**
> SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo youtubeVideoSubtitlesTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.youtubeVideoSubtitlesTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo**](SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="youtubeVideoSubtitlesLiveAdvanced"></a>
# **youtubeVideoSubtitlesLiveAdvanced**
> SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo youtubeVideoSubtitlesLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo();
   task.video_id = "Y8Wu4rSNJms";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.youtubeVideoSubtitlesLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo[]&gt;**](SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo**](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="youtubeVideoCommentsTaskPost"></a>
# **youtubeVideoCommentsTaskPost**
> SerpYoutubeVideoCommentsTaskPostResponseInfo youtubeVideoCommentsTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpYoutubeVideoCommentsTaskPostRequestInfo();
   task.video_id = "vQXvyV0zIP4";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.youtubeVideoCommentsTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpYoutubeVideoCommentsTaskPostRequestInfo[]&gt;**](SerpYoutubeVideoCommentsTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpYoutubeVideoCommentsTaskPostResponseInfo**](SerpYoutubeVideoCommentsTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="youtubeVideoCommentsTasksReady"></a>
# **youtubeVideoCommentsTasksReady**
> SerpYoutubeVideoCommentsTasksReadyResponseInfo youtubeVideoCommentsTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.youtubeVideoCommentsTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYoutubeVideoCommentsTasksReadyResponseInfo**](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="youtubeVideoCommentsTasksFixed"></a>
# **youtubeVideoCommentsTasksFixed**
> SerpYoutubeVideoCommentsTasksFixedResponseInfo youtubeVideoCommentsTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.youtubeVideoCommentsTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYoutubeVideoCommentsTasksFixedResponseInfo**](SerpYoutubeVideoCommentsTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="youtubeVideoCommentsTaskGetAdvanced"></a>
# **youtubeVideoCommentsTaskGetAdvanced**
> SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo youtubeVideoCommentsTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.youtubeVideoCommentsTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo**](SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="youtubeVideoCommentsLiveAdvanced"></a>
# **youtubeVideoCommentsLiveAdvanced**
> SerpYoutubeVideoCommentsLiveAdvancedResponseInfo youtubeVideoCommentsLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpYoutubeVideoCommentsLiveAdvancedRequestInfo();
   task.video_id = "vQXvyV0zIP4";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.youtubeVideoCommentsLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpYoutubeVideoCommentsLiveAdvancedRequestInfo[]&gt;**](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**SerpYoutubeVideoCommentsLiveAdvancedResponseInfo**](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpYahooLocations"></a>
# **serpYahooLocations**
> SerpYahooLocationsResponseInfo serpYahooLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.serpYahooLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYahooLocationsResponseInfo**](SerpYahooLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpYahooLocationsCountry"></a>
# **serpYahooLocationsCountry**
> SerpYahooLocationsCountryResponseInfo serpYahooLocationsCountry()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let country = "us";
 let response = await api.serpYahooLocationsCountry(country);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYahooLocationsCountryResponseInfo**](SerpYahooLocationsCountryResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpYahooLanguages"></a>
# **serpYahooLanguages**
> SerpYahooLanguagesResponseInfo serpYahooLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.serpYahooLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYahooLanguagesResponseInfo**](SerpYahooLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="yahooOrganicTaskPost"></a>
# **yahooOrganicTaskPost**
> SerpYahooOrganicTaskPostResponseInfo yahooOrganicTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpYahooOrganicTaskPostRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.yahooOrganicTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpYahooOrganicTaskPostRequestInfo[]&gt;**](SerpYahooOrganicTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpYahooOrganicTaskPostResponseInfo**](SerpYahooOrganicTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="yahooOrganicTasksReady"></a>
# **yahooOrganicTasksReady**
> SerpYahooOrganicTasksReadyResponseInfo yahooOrganicTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.yahooOrganicTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYahooOrganicTasksReadyResponseInfo**](SerpYahooOrganicTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="yahooOrganicTasksFixed"></a>
# **yahooOrganicTasksFixed**
> SerpYahooOrganicTasksFixedResponseInfo yahooOrganicTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.yahooOrganicTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYahooOrganicTasksFixedResponseInfo**](SerpYahooOrganicTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="yahooOrganicTaskGetRegular"></a>
# **yahooOrganicTaskGetRegular**
> SerpYahooOrganicTaskGetRegularResponseInfo yahooOrganicTaskGetRegular()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.yahooOrganicTaskGetRegular(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYahooOrganicTaskGetRegularResponseInfo**](SerpYahooOrganicTaskGetRegularResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="yahooOrganicTaskGetAdvanced"></a>
# **yahooOrganicTaskGetAdvanced**
> SerpYahooOrganicTaskGetAdvancedResponseInfo yahooOrganicTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.yahooOrganicTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYahooOrganicTaskGetAdvancedResponseInfo**](SerpYahooOrganicTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="yahooOrganicTaskGetHtml"></a>
# **yahooOrganicTaskGetHtml**
> SerpYahooOrganicTaskGetHtmlResponseInfo yahooOrganicTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.yahooOrganicTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpYahooOrganicTaskGetHtmlResponseInfo**](SerpYahooOrganicTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="yahooOrganicLiveRegular"></a>
# **yahooOrganicLiveRegular**
> SerpYahooOrganicLiveRegularResponseInfo yahooOrganicLiveRegular()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpYahooOrganicLiveRegularRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.yahooOrganicLiveRegular([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpYahooOrganicLiveRegularRequestInfo[]&gt;**](SerpYahooOrganicLiveRegularRequestInfo[].md)|  | [optional] |



### Return type

[**SerpYahooOrganicLiveRegularResponseInfo**](SerpYahooOrganicLiveRegularResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="yahooOrganicLiveAdvanced"></a>
# **yahooOrganicLiveAdvanced**
> SerpYahooOrganicLiveAdvancedResponseInfo yahooOrganicLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpYahooOrganicLiveAdvancedRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.yahooOrganicLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpYahooOrganicLiveAdvancedRequestInfo[]&gt;**](SerpYahooOrganicLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**SerpYahooOrganicLiveAdvancedResponseInfo**](SerpYahooOrganicLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="yahooOrganicLiveHtml"></a>
# **yahooOrganicLiveHtml**
> SerpYahooOrganicLiveHtmlResponseInfo yahooOrganicLiveHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpYahooOrganicLiveHtmlRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.yahooOrganicLiveHtml([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpYahooOrganicLiveHtmlRequestInfo[]&gt;**](SerpYahooOrganicLiveHtmlRequestInfo[].md)|  | [optional] |



### Return type

[**SerpYahooOrganicLiveHtmlResponseInfo**](SerpYahooOrganicLiveHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpBaiduLocations"></a>
# **serpBaiduLocations**
> SerpBaiduLocationsResponseInfo serpBaiduLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.serpBaiduLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBaiduLocationsResponseInfo**](SerpBaiduLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpBaiduLocationsCountry"></a>
# **serpBaiduLocationsCountry**
> SerpBaiduLocationsCountryResponseInfo serpBaiduLocationsCountry()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let country = "us";
 let response = await api.serpBaiduLocationsCountry(country);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBaiduLocationsCountryResponseInfo**](SerpBaiduLocationsCountryResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpBaiduLanguages"></a>
# **serpBaiduLanguages**
> SerpBaiduLanguagesResponseInfo serpBaiduLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.serpBaiduLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBaiduLanguagesResponseInfo**](SerpBaiduLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="baiduOrganicTaskPost"></a>
# **baiduOrganicTaskPost**
> SerpBaiduOrganicTaskPostResponseInfo baiduOrganicTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpBaiduOrganicTaskPostRequestInfo();
   task.keyword = "best iphone ever";
   task.priority = 2;
   task.location_code = 2156;
   task.tag = "some_string_123";
 let response = await api.baiduOrganicTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpBaiduOrganicTaskPostRequestInfo[]&gt;**](SerpBaiduOrganicTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpBaiduOrganicTaskPostResponseInfo**](SerpBaiduOrganicTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="baiduOrganicTasksReady"></a>
# **baiduOrganicTasksReady**
> SerpBaiduOrganicTasksReadyResponseInfo baiduOrganicTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.baiduOrganicTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBaiduOrganicTasksReadyResponseInfo**](SerpBaiduOrganicTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="baiduOrganicTasksFixed"></a>
# **baiduOrganicTasksFixed**
> SerpBaiduOrganicTasksFixedResponseInfo baiduOrganicTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.baiduOrganicTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBaiduOrganicTasksFixedResponseInfo**](SerpBaiduOrganicTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="baiduOrganicTaskGetRegular"></a>
# **baiduOrganicTaskGetRegular**
> SerpBaiduOrganicTaskGetRegularResponseInfo baiduOrganicTaskGetRegular()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.baiduOrganicTaskGetRegular(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBaiduOrganicTaskGetRegularResponseInfo**](SerpBaiduOrganicTaskGetRegularResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="baiduOrganicTaskGetAdvanced"></a>
# **baiduOrganicTaskGetAdvanced**
> SerpBaiduOrganicTaskGetAdvancedResponseInfo baiduOrganicTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.baiduOrganicTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBaiduOrganicTaskGetAdvancedResponseInfo**](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="baiduOrganicTaskGetHtml"></a>
# **baiduOrganicTaskGetHtml**
> SerpBaiduOrganicTaskGetHtmlResponseInfo baiduOrganicTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.baiduOrganicTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpBaiduOrganicTaskGetHtmlResponseInfo**](SerpBaiduOrganicTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="naverOrganicTaskPost"></a>
# **naverOrganicTaskPost**
> SerpNaverOrganicTaskPostResponseInfo naverOrganicTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpNaverOrganicTaskPostRequestInfo();
   task.keyword = "albert einstein";
   task.device = "desktop";
   task.tag = "some_string_123";
   task.postback_url = "https://your-server.com/postbackscript.php";
   task.postback_data = "regular";
 let response = await api.naverOrganicTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpNaverOrganicTaskPostRequestInfo[]&gt;**](SerpNaverOrganicTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpNaverOrganicTaskPostResponseInfo**](SerpNaverOrganicTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="naverOrganicTasksReady"></a>
# **naverOrganicTasksReady**
> SerpNaverOrganicTasksReadyResponseInfo naverOrganicTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.naverOrganicTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpNaverOrganicTasksReadyResponseInfo**](SerpNaverOrganicTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="naverOrganicTasksFixed"></a>
# **naverOrganicTasksFixed**
> SerpNaverOrganicTasksFixedResponseInfo naverOrganicTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.naverOrganicTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpNaverOrganicTasksFixedResponseInfo**](SerpNaverOrganicTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="naverOrganicTaskGetRegular"></a>
# **naverOrganicTaskGetRegular**
> SerpNaverOrganicTaskGetRegularResponseInfo naverOrganicTaskGetRegular()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.naverOrganicTaskGetRegular(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpNaverOrganicTaskGetRegularResponseInfo**](SerpNaverOrganicTaskGetRegularResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="naverOrganicTaskGetAdvanced"></a>
# **naverOrganicTaskGetAdvanced**
> SerpNaverOrganicTaskGetAdvancedResponseInfo naverOrganicTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.naverOrganicTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpNaverOrganicTaskGetAdvancedResponseInfo**](SerpNaverOrganicTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="naverOrganicTaskGetHtml"></a>
# **naverOrganicTaskGetHtml**
> SerpNaverOrganicTaskGetHtmlResponseInfo naverOrganicTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.naverOrganicTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpNaverOrganicTaskGetHtmlResponseInfo**](SerpNaverOrganicTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpSeznamLocations"></a>
# **serpSeznamLocations**
> SerpSeznamLocationsResponseInfo serpSeznamLocations()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.serpSeznamLocations();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpSeznamLocationsResponseInfo**](SerpSeznamLocationsResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpSeznamLocationsCountry"></a>
# **serpSeznamLocationsCountry**
> SerpSeznamLocationsCountryResponseInfo serpSeznamLocationsCountry()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let country = "us";
 let response = await api.serpSeznamLocationsCountry(country);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpSeznamLocationsCountryResponseInfo**](SerpSeznamLocationsCountryResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="serpSeznamLanguages"></a>
# **serpSeznamLanguages**
> SerpSeznamLanguagesResponseInfo serpSeznamLanguages()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.serpSeznamLanguages();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpSeznamLanguagesResponseInfo**](SerpSeznamLanguagesResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="seznamOrganicTaskPost"></a>
# **seznamOrganicTaskPost**
> SerpSeznamOrganicTaskPostResponseInfo seznamOrganicTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpSeznamOrganicTaskPostRequestInfo();
   task.keyword = "albert einstein";
   task.location_code = 2203;
   task.language_code = "cs";
 let response = await api.seznamOrganicTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpSeznamOrganicTaskPostRequestInfo[]&gt;**](SerpSeznamOrganicTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpSeznamOrganicTaskPostResponseInfo**](SerpSeznamOrganicTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="seznamOrganicTasksReady"></a>
# **seznamOrganicTasksReady**
> SerpSeznamOrganicTasksReadyResponseInfo seznamOrganicTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.seznamOrganicTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpSeznamOrganicTasksReadyResponseInfo**](SerpSeznamOrganicTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="seznamOrganicTasksFixed"></a>
# **seznamOrganicTasksFixed**
> SerpSeznamOrganicTasksFixedResponseInfo seznamOrganicTasksFixed()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.seznamOrganicTasksFixed();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpSeznamOrganicTasksFixedResponseInfo**](SerpSeznamOrganicTasksFixedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="seznamOrganicTaskGetRegular"></a>
# **seznamOrganicTaskGetRegular**
> SerpSeznamOrganicTaskGetRegularResponseInfo seznamOrganicTaskGetRegular()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.seznamOrganicTaskGetRegular(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpSeznamOrganicTaskGetRegularResponseInfo**](SerpSeznamOrganicTaskGetRegularResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="seznamOrganicTaskGetAdvanced"></a>
# **seznamOrganicTaskGetAdvanced**
> SerpSeznamOrganicTaskGetAdvancedResponseInfo seznamOrganicTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.seznamOrganicTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpSeznamOrganicTaskGetAdvancedResponseInfo**](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="seznamOrganicTaskGetHtml"></a>
# **seznamOrganicTaskGetHtml**
> SerpSeznamOrganicTaskGetHtmlResponseInfo seznamOrganicTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.seznamOrganicTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpSeznamOrganicTaskGetHtmlResponseInfo**](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceExploreTaskPost"></a>
# **googleFinanceExploreTaskPost**
> SerpGoogleFinanceExploreTaskPostResponseInfo googleFinanceExploreTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleFinanceExploreTaskPostRequestInfo();
   task.location_code = 2840;
   task.language_name = "English";
 let response = await api.googleFinanceExploreTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleFinanceExploreTaskPostRequestInfo[]&gt;**](SerpGoogleFinanceExploreTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleFinanceExploreTaskPostResponseInfo**](SerpGoogleFinanceExploreTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceExploreTasksReady"></a>
# **googleFinanceExploreTasksReady**
> SerpGoogleFinanceExploreTasksReadyResponseInfo googleFinanceExploreTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleFinanceExploreTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleFinanceExploreTasksReadyResponseInfo**](SerpGoogleFinanceExploreTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceExploreTaskGetAdvanced"></a>
# **googleFinanceExploreTaskGetAdvanced**
> SerpGoogleFinanceExploreTaskGetAdvancedResponseInfo googleFinanceExploreTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleFinanceExploreTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleFinanceExploreTaskGetAdvancedResponseInfo**](SerpGoogleFinanceExploreTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceExploreTaskGetHtml"></a>
# **googleFinanceExploreTaskGetHtml**
> SerpGoogleFinanceExploreTaskGetHtmlResponseInfo googleFinanceExploreTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleFinanceExploreTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleFinanceExploreTaskGetHtmlResponseInfo**](SerpGoogleFinanceExploreTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceExploreLiveAdvanced"></a>
# **googleFinanceExploreLiveAdvanced**
> SerpGoogleFinanceExploreLiveAdvancedResponseInfo googleFinanceExploreLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleFinanceExploreLiveAdvancedRequestInfo();
   task.location_code = 2840;
   task.language_name = "English";
 let response = await api.googleFinanceExploreLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleFinanceExploreLiveAdvancedRequestInfo[]&gt;**](SerpGoogleFinanceExploreLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleFinanceExploreLiveAdvancedResponseInfo**](SerpGoogleFinanceExploreLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceExploreLiveHtml"></a>
# **googleFinanceExploreLiveHtml**
> SerpGoogleFinanceExploreLiveHtmlResponseInfo googleFinanceExploreLiveHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleFinanceExploreLiveHtmlRequestInfo();
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleFinanceExploreLiveHtml([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleFinanceExploreLiveHtmlRequestInfo[]&gt;**](SerpGoogleFinanceExploreLiveHtmlRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleFinanceExploreLiveHtmlResponseInfo**](SerpGoogleFinanceExploreLiveHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceMarketsTaskPost"></a>
# **googleFinanceMarketsTaskPost**
> SerpGoogleFinanceMarketsTaskPostResponseInfo googleFinanceMarketsTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleFinanceMarketsTaskPostRequestInfo();
   task.location_code = 2840;
   task.language_name = "English";
 let response = await api.googleFinanceMarketsTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleFinanceMarketsTaskPostRequestInfo[]&gt;**](SerpGoogleFinanceMarketsTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleFinanceMarketsTaskPostResponseInfo**](SerpGoogleFinanceMarketsTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceMarketsTasksReady"></a>
# **googleFinanceMarketsTasksReady**
> SerpGoogleFinanceMarketsTasksReadyResponseInfo googleFinanceMarketsTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleFinanceMarketsTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleFinanceMarketsTasksReadyResponseInfo**](SerpGoogleFinanceMarketsTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceMarketsTaskGetAdvanced"></a>
# **googleFinanceMarketsTaskGetAdvanced**
> SerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo googleFinanceMarketsTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleFinanceMarketsTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo**](SerpGoogleFinanceMarketsTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceMarketsTaskGetHtml"></a>
# **googleFinanceMarketsTaskGetHtml**
> SerpGoogleFinanceMarketsTaskGetHtmlResponseInfo googleFinanceMarketsTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleFinanceMarketsTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleFinanceMarketsTaskGetHtmlResponseInfo**](SerpGoogleFinanceMarketsTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceMarketsLiveAdvanced"></a>
# **googleFinanceMarketsLiveAdvanced**
> SerpGoogleFinanceMarketsLiveAdvancedResponseInfo googleFinanceMarketsLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleFinanceMarketsLiveAdvancedRequestInfo();
   task.location_code = 2840;
   task.language_name = "English";
 let response = await api.googleFinanceMarketsLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleFinanceMarketsLiveAdvancedRequestInfo[]&gt;**](SerpGoogleFinanceMarketsLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleFinanceMarketsLiveAdvancedResponseInfo**](SerpGoogleFinanceMarketsLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceMarketsLiveHtml"></a>
# **googleFinanceMarketsLiveHtml**
> SerpGoogleFinanceMarketsLiveHtmlResponseInfo googleFinanceMarketsLiveHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleFinanceMarketsLiveHtmlRequestInfo();
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleFinanceMarketsLiveHtml([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleFinanceMarketsLiveHtmlRequestInfo[]&gt;**](SerpGoogleFinanceMarketsLiveHtmlRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleFinanceMarketsLiveHtmlResponseInfo**](SerpGoogleFinanceMarketsLiveHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceQuoteTaskPost"></a>
# **googleFinanceQuoteTaskPost**
> SerpGoogleFinanceQuoteTaskPostResponseInfo googleFinanceQuoteTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleFinanceQuoteTaskPostRequestInfo();
   task.keyword = ".DJI:INDEXDJX";
   task.location_code = 2840;
   task.language_name = "English";
 let response = await api.googleFinanceQuoteTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleFinanceQuoteTaskPostRequestInfo[]&gt;**](SerpGoogleFinanceQuoteTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleFinanceQuoteTaskPostResponseInfo**](SerpGoogleFinanceQuoteTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceQuoteTasksReady"></a>
# **googleFinanceQuoteTasksReady**
> SerpGoogleFinanceQuoteTasksReadyResponseInfo googleFinanceQuoteTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleFinanceQuoteTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleFinanceQuoteTasksReadyResponseInfo**](SerpGoogleFinanceQuoteTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceQuoteTaskGetAdvanced"></a>
# **googleFinanceQuoteTaskGetAdvanced**
> SerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo googleFinanceQuoteTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleFinanceQuoteTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo**](SerpGoogleFinanceQuoteTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceQuoteTaskGetHtml"></a>
# **googleFinanceQuoteTaskGetHtml**
> SerpGoogleFinanceQuoteTaskGetHtmlResponseInfo googleFinanceQuoteTaskGetHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleFinanceQuoteTaskGetHtml(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleFinanceQuoteTaskGetHtmlResponseInfo**](SerpGoogleFinanceQuoteTaskGetHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceQuoteLiveAdvanced"></a>
# **googleFinanceQuoteLiveAdvanced**
> SerpGoogleFinanceQuoteLiveAdvancedResponseInfo googleFinanceQuoteLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleFinanceQuoteLiveAdvancedRequestInfo();
   task.keyword = "CLW00:NYMEX";
   task.location_code = 2840;
   task.language_name = "English";
 let response = await api.googleFinanceQuoteLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleFinanceQuoteLiveAdvancedRequestInfo[]&gt;**](SerpGoogleFinanceQuoteLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleFinanceQuoteLiveAdvancedResponseInfo**](SerpGoogleFinanceQuoteLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceQuoteLiveHtml"></a>
# **googleFinanceQuoteLiveHtml**
> SerpGoogleFinanceQuoteLiveHtmlResponseInfo googleFinanceQuoteLiveHtml()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleFinanceQuoteLiveHtmlRequestInfo();
   task.keyword = "NASDAQ-100";
   task.location_code = 2840;
   task.language_code = "en";
 let response = await api.googleFinanceQuoteLiveHtml([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleFinanceQuoteLiveHtmlRequestInfo[]&gt;**](SerpGoogleFinanceQuoteLiveHtmlRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleFinanceQuoteLiveHtmlResponseInfo**](SerpGoogleFinanceQuoteLiveHtmlResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceTickerSearchTaskPost"></a>
# **googleFinanceTickerSearchTaskPost**
> SerpGoogleFinanceTickerSearchTaskPostResponseInfo googleFinanceTickerSearchTaskPost()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleFinanceTickerSearchTaskPostRequestInfo();
   task.keyword = "DJ";
   task.location_code = 2840;
   task.language_name = "English";
   task.priority = 2;
   task.category = "all";
 let response = await api.googleFinanceTickerSearchTaskPost([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleFinanceTickerSearchTaskPostRequestInfo[]&gt;**](SerpGoogleFinanceTickerSearchTaskPostRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleFinanceTickerSearchTaskPostResponseInfo**](SerpGoogleFinanceTickerSearchTaskPostResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceTickerSearchTasksReady"></a>
# **googleFinanceTickerSearchTasksReady**
> SerpGoogleFinanceTickerSearchTasksReadyResponseInfo googleFinanceTickerSearchTasksReady()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let response = await api.googleFinanceTickerSearchTasksReady();
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleFinanceTickerSearchTasksReadyResponseInfo**](SerpGoogleFinanceTickerSearchTasksReadyResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceTickerSearchTaskGetAdvanced"></a>
# **googleFinanceTickerSearchTaskGetAdvanced**
> SerpGoogleFinanceTickerSearchTaskGetAdvancedResponseInfo googleFinanceTickerSearchTaskGetAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let id = "00000000-0000-0000-0000-000000000000";
 let response = await api.googleFinanceTickerSearchTaskGetAdvanced(id);
```

### Parameters


    
This endpoint does not need any parameter.
    


### Return type

[**SerpGoogleFinanceTickerSearchTaskGetAdvancedResponseInfo**](SerpGoogleFinanceTickerSearchTaskGetAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |

<a id="googleFinanceTickerSearchLiveAdvanced"></a>
# **googleFinanceTickerSearchLiveAdvanced**
> SerpGoogleFinanceTickerSearchLiveAdvancedResponseInfo googleFinanceTickerSearchLiveAdvanced()


### Example
```typescript
 const username = 'USERNAME';
 const password = 'PASSWORD';

 let api = new SerpApi("https://api.dataforseo.com", {
   fetch: (url: RequestInfo, init?: RequestInit): Promise<Response> => {
     const token = btoa(`${username}:${password}`);
     const authHeader = { 'Authorization': `Basic ${token}` };

     const newInit: RequestInit = {
       ...init,
       headers: {
       ...init?.headers,
       ...authHeader,
     }
   };

   return fetch(url, newInit);
   }
 });

 let task = new SerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo();
   task.keyword = "DJ";
   task.location_code = 2840;
   task.language_name = "English";
   task.category = "all";
 let response = await api.googleFinanceTickerSearchLiveAdvanced([task]);
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **** | [**List&lt;SerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo[]&gt;**](SerpGoogleFinanceTickerSearchLiveAdvancedRequestInfo[].md)|  | [optional] |



### Return type

[**SerpGoogleFinanceTickerSearchLiveAdvancedResponseInfo**](SerpGoogleFinanceTickerSearchLiveAdvancedResponseInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  -  |