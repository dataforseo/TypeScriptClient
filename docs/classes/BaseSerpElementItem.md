**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new BaseSerpElementItem(data)

> **new BaseSerpElementItem**(`data`?): [`BaseSerpElementItem`](BaseSerpElementItem.md)

#### Parameters

• **data?**: [`IBaseSerpElementItem`](../interfaces/IBaseSerpElementItem.md)

#### Returns

[`BaseSerpElementItem`](BaseSerpElementItem.md)

#### Source

main.ts:19996

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Source

main.ts:19994

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:20006

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:20357

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BaseSerpElementItem`](BaseSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseSerpElementItem`](BaseSerpElementItem.md)

#### Source

main.ts:20015
