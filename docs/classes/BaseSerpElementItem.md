[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseSerpElementItem

# Class: BaseSerpElementItem

Defined in: main.ts:21028

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
- [`KnowledgeGraphAiOverviewItemSerpElementItem`](KnowledgeGraphAiOverviewItemSerpElementItem.md)
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
- [`EventItemSerpElementItem`](EventItemSerpElementItem.md)
- [`DictionarySerpElementItem`](DictionarySerpElementItem.md)

## Implements

- [`IBaseSerpElementItem`](../interfaces/IBaseSerpElementItem.md)

## Constructors

### new BaseSerpElementItem()

> **new BaseSerpElementItem**(`data`?): [`BaseSerpElementItem`](BaseSerpElementItem.md)

Defined in: main.ts:21047

#### Parameters

##### data?

[`IBaseSerpElementItem`](../interfaces/IBaseSerpElementItem.md)

#### Returns

[`BaseSerpElementItem`](BaseSerpElementItem.md)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21045

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IBaseSerpElementItem`](../interfaces/IBaseSerpElementItem.md).[`position`](../interfaces/IBaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IBaseSerpElementItem`](../interfaces/IBaseSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21034

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseSerpElementItem`](../interfaces/IBaseSerpElementItem.md).[`rank_group`](../interfaces/IBaseSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IBaseSerpElementItem`](../interfaces/IBaseSerpElementItem.md).[`type`](../interfaces/IBaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IBaseSerpElementItem`](../interfaces/IBaseSerpElementItem.md).[`xpath`](../interfaces/IBaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:21057

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:21379

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseSerpElementItem`](BaseSerpElementItem.md)

Defined in: main.ts:21067

#### Parameters

##### data

`any`

#### Returns

[`BaseSerpElementItem`](BaseSerpElementItem.md)
