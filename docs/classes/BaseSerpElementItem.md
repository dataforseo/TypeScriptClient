[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BaseSerpElementItem

# Class: BaseSerpElementItem

## Extended by

- [`PaidSerpElementItem`](PaidSerpElementItem.md)
- [`OrganicSerpElementItem`](OrganicSerpElementItem.md)
- [`FeaturedSnippetSerpElementItem`](FeaturedSnippetSerpElementItem.md)
- [`KnowledgeGraphCarouselItemSerpElementItem`](KnowledgeGraphCarouselItemSerpElementItem.md)
- [`KnowledgeGraphDescriptionItemSerpElementItem`](KnowledgeGraphDescriptionItemSerpElementItem.md)
- [`KnowledgeGraphImagesItemSerpElementItem`](KnowledgeGraphImagesItemSerpElementItem.md)
- [`KnowledgeGraphListItemSerpElementItem`](KnowledgeGraphListItemSerpElementItem.md)
- [`KnowledgeGraphRowItemSerpElementItem`](KnowledgeGraphRowItemSerpElementItem.md)
- [`KnowledgeGraphExpandedItemSerpElementItem`](KnowledgeGraphExpandedItemSerpElementItem.md)
- [`KnowledgeGraphPartItemSerpElementItem`](KnowledgeGraphPartItemSerpElementItem.md)
- [`KnowledgeGraphShoppingItemSerpElementItem`](KnowledgeGraphShoppingItemSerpElementItem.md)
- [`KnowledgeGraphHotelsBookingItemSerpElementItem`](KnowledgeGraphHotelsBookingItemSerpElementItem.md)
- [`KnowledgeGraphSerpElementItem`](KnowledgeGraphSerpElementItem.md)
- [`TopStoriesSerpElementItem`](TopStoriesSerpElementItem.md)
- [`PeopleAlsoAskSerpElementItem`](PeopleAlsoAskSerpElementItem.md)
- [`PeopleAlsoSearchSerpElementItem`](PeopleAlsoSearchSerpElementItem.md)
- [`ImagesSerpElementItem`](ImagesSerpElementItem.md)
- [`TwitterSerpElementItem`](TwitterSerpElementItem.md)
- [`GoogleReviewsSerpElementItem`](GoogleReviewsSerpElementItem.md)
- [`JobsSerpElementItem`](JobsSerpElementItem.md)
- [`MapSerpElementItem`](MapSerpElementItem.md)
- [`AppSerpElementItem`](AppSerpElementItem.md)
- [`LocalPackSerpElementItem`](LocalPackSerpElementItem.md)
- [`CarouselSerpElementItem`](CarouselSerpElementItem.md)
- [`VideoSerpElementItem`](VideoSerpElementItem.md)
- [`AnswerBoxSerpElementItem`](AnswerBoxSerpElementItem.md)
- [`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)
- [`GoogleFlightsSerpElementItem`](GoogleFlightsSerpElementItem.md)
- [`MentionCarouselSerpElementItem`](MentionCarouselSerpElementItem.md)
- [`EventsSerpElementItem`](EventsSerpElementItem.md)
- [`RelatedSearchesSerpElementItem`](RelatedSearchesSerpElementItem.md)
- [`MultiCarouselSerpElementItem`](MultiCarouselSerpElementItem.md)
- [`RecipesSerpElementItem`](RecipesSerpElementItem.md)
- [`TopSightsSerpElementItem`](TopSightsSerpElementItem.md)
- [`ScholarlyArticlesSerpElementItem`](ScholarlyArticlesSerpElementItem.md)
- [`PopularProductsSerpElementItem`](PopularProductsSerpElementItem.md)
- [`PodcastsSerpElementItem`](PodcastsSerpElementItem.md)
- [`StocksBoxSerpElementItem`](StocksBoxSerpElementItem.md)
- [`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)
- [`QuestionsAndAnswersSerpElementItem`](QuestionsAndAnswersSerpElementItem.md)
- [`HotelsPackSerpElementItem`](HotelsPackSerpElementItem.md)
- [`VisualStoriesSerpElementItem`](VisualStoriesSerpElementItem.md)
- [`CommercialUnitsSerpElementItem`](CommercialUnitsSerpElementItem.md)
- [`LocalServicesSerpElementItem`](LocalServicesSerpElementItem.md)
- [`GoogleHotelsSerpElementItem`](GoogleHotelsSerpElementItem.md)
- [`MathSolverSerpElementItem`](MathSolverSerpElementItem.md)
- [`CurrencyBoxSerpElementItem`](CurrencyBoxSerpElementItem.md)
- [`GooglePostsSerpElementItem`](GooglePostsSerpElementItem.md)
- [`ProductConsiderationsSerpElementItem`](ProductConsiderationsSerpElementItem.md)
- [`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)
- [`ShortVideosSerpElementItem`](ShortVideosSerpElementItem.md)
- [`RefineProductsSerpElementItem`](RefineProductsSerpElementItem.md)
- [`ExploreBrandsSerpElementItem`](ExploreBrandsSerpElementItem.md)
- [`PerspectivesSerpElementItem`](PerspectivesSerpElementItem.md)
- [`DiscussionsAndForumsSerpElementItem`](DiscussionsAndForumsSerpElementItem.md)
- [`CompareSitesSerpElementItem`](CompareSitesSerpElementItem.md)
- [`CoursesSerpElementItem`](CoursesSerpElementItem.md)
- [`AiOverviewSerpElementItem`](AiOverviewSerpElementItem.md)
- [`MapsSearchSerpElementItem`](MapsSearchSerpElementItem.md)
- [`MapsPaidItemSerpElementItem`](MapsPaidItemSerpElementItem.md)
- [`NewsSearchSerpElementItem`](NewsSearchSerpElementItem.md)
- [`EventItemSerpElementItem`](EventItemSerpElementItem.md)
- [`ImagesSearchSerpElementItem`](ImagesSearchSerpElementItem.md)
- [`GoogleJobsItemSerpElementItem`](GoogleJobsItemSerpElementItem.md)
- [`AutocompleteSerpElementItem`](AutocompleteSerpElementItem.md)
- [`DatasetSerpElementItem`](DatasetSerpElementItem.md)
- [`YoutubeVideoInfoSerpElementItem`](YoutubeVideoInfoSerpElementItem.md)
- [`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)
- [`YoutubeCommentSerpElementItem`](YoutubeCommentSerpElementItem.md)
- [`DictionarySerpElementItem`](DictionarySerpElementItem.md)

## Implements

- [`IBaseSerpElementItem`](../interfaces/IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BaseSerpElementItem()

> **new BaseSerpElementItem**(`data`?): [`BaseSerpElementItem`](BaseSerpElementItem.md)

#### Parameters

• **data?**: [`IBaseSerpElementItem`](../interfaces/IBaseSerpElementItem.md)

#### Returns

[`BaseSerpElementItem`](BaseSerpElementItem.md)

#### Defined in

main.ts:20356

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:20354

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:20366

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:20732

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseSerpElementItem`](BaseSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseSerpElementItem`](BaseSerpElementItem.md)

#### Defined in

main.ts:20375
