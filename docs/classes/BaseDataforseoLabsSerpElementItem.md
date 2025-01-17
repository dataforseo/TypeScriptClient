[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseDataforseoLabsSerpElementItem

# Class: BaseDataforseoLabsSerpElementItem

Defined in: main.ts:21409

## Extended by

- [`OrganicDataforseoLabsSerpElementItem`](OrganicDataforseoLabsSerpElementItem.md)
- [`PeopleAlsoAskDataforseoLabsSerpElementItem`](PeopleAlsoAskDataforseoLabsSerpElementItem.md)
- [`RelatedSearchesDataforseoLabsSerpElementItem`](RelatedSearchesDataforseoLabsSerpElementItem.md)
- [`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)
- [`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)
- [`KnowledgeGraphRowItemDataforseoLabsSerpElementItem`](KnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)
- [`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)
- [`KnowledgeGraphDataforseoLabsSerpElementItem`](KnowledgeGraphDataforseoLabsSerpElementItem.md)
- [`TwitterDataforseoLabsSerpElementItem`](TwitterDataforseoLabsSerpElementItem.md)
- [`VideoDataforseoLabsSerpElementItem`](VideoDataforseoLabsSerpElementItem.md)
- [`ImagesDataforseoLabsSerpElementItem`](ImagesDataforseoLabsSerpElementItem.md)
- [`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)
- [`MultiCarouselDataforseoLabsSerpElementItem`](MultiCarouselDataforseoLabsSerpElementItem.md)
- [`TopStoriesDataforseoLabsSerpElementItem`](TopStoriesDataforseoLabsSerpElementItem.md)
- [`AnswerBoxDataforseoLabsSerpElementItem`](AnswerBoxDataforseoLabsSerpElementItem.md)
- [`MathSolverDataforseoLabsSerpElementItem`](MathSolverDataforseoLabsSerpElementItem.md)
- [`PeopleAlsoSearchDataforseoLabsSerpElementItem`](PeopleAlsoSearchDataforseoLabsSerpElementItem.md)
- [`MapDataforseoLabsSerpElementItem`](MapDataforseoLabsSerpElementItem.md)
- [`FeaturedSnippetDataforseoLabsSerpElementItem`](FeaturedSnippetDataforseoLabsSerpElementItem.md)
- [`LocalPackDataforseoLabsSerpElementItem`](LocalPackDataforseoLabsSerpElementItem.md)
- [`HotelsPackDataforseoLabsSerpElementItem`](HotelsPackDataforseoLabsSerpElementItem.md)
- [`KnowledgeGraphListItemDataforseoLabsSerpElementItem`](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md)
- [`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)
- [`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)
- [`KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)
- [`PaidDataforseoLabsSerpElementItem`](PaidDataforseoLabsSerpElementItem.md)
- [`GoogleReviewsDataforseoLabsSerpElementItem`](GoogleReviewsDataforseoLabsSerpElementItem.md)
- [`GooglePostsDataforseoLabsSerpElementItem`](GooglePostsDataforseoLabsSerpElementItem.md)
- [`GoogleFlightsDataforseoLabsSerpElementItem`](GoogleFlightsDataforseoLabsSerpElementItem.md)
- [`ShoppingDataforseoLabsSerpElementItem`](ShoppingDataforseoLabsSerpElementItem.md)
- [`JobsDataforseoLabsSerpElementItem`](JobsDataforseoLabsSerpElementItem.md)
- [`EventsDataforseoLabsSerpElementItem`](EventsDataforseoLabsSerpElementItem.md)
- [`MentionCarouselDataforseoLabsSerpElementItem`](MentionCarouselDataforseoLabsSerpElementItem.md)
- [`RecipesDataforseoLabsSerpElementItem`](RecipesDataforseoLabsSerpElementItem.md)
- [`TopSightsDataforseoLabsSerpElementItem`](TopSightsDataforseoLabsSerpElementItem.md)
- [`ScholarlyArticlesDataforseoLabsSerpElementItem`](ScholarlyArticlesDataforseoLabsSerpElementItem.md)
- [`PopularProductsDataforseoLabsSerpElementItem`](PopularProductsDataforseoLabsSerpElementItem.md)
- [`PodcastsDataforseoLabsSerpElementItem`](PodcastsDataforseoLabsSerpElementItem.md)
- [`QuestionsAndAnswersDataforseoLabsSerpElementItem`](QuestionsAndAnswersDataforseoLabsSerpElementItem.md)
- [`FindResultsOnDataforseoLabsSerpElementItem`](FindResultsOnDataforseoLabsSerpElementItem.md)
- [`StocksBoxDataforseoLabsSerpElementItem`](StocksBoxDataforseoLabsSerpElementItem.md)
- [`VisualStoriesDataforseoLabsSerpElementItem`](VisualStoriesDataforseoLabsSerpElementItem.md)
- [`CommercialUnitsDataforseoLabsSerpElementItem`](CommercialUnitsDataforseoLabsSerpElementItem.md)
- [`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)
- [`GoogleHotelsDataforseoLabsSerpElementItem`](GoogleHotelsDataforseoLabsSerpElementItem.md)

## Implements

- [`IBaseDataforseoLabsSerpElementItem`](../interfaces/IBaseDataforseoLabsSerpElementItem.md)

## Constructors

### new BaseDataforseoLabsSerpElementItem()

> **new BaseDataforseoLabsSerpElementItem**(`data`?): [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

Defined in: main.ts:21427

#### Parameters

##### data?

[`IBaseDataforseoLabsSerpElementItem`](../interfaces/IBaseDataforseoLabsSerpElementItem.md)

#### Returns

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21425

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IBaseDataforseoLabsSerpElementItem`](../interfaces/IBaseDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IBaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IBaseDataforseoLabsSerpElementItem`](../interfaces/IBaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseDataforseoLabsSerpElementItem`](../interfaces/IBaseDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IBaseDataforseoLabsSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`IBaseDataforseoLabsSerpElementItem`](../interfaces/IBaseDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IBaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`IBaseDataforseoLabsSerpElementItem`](../interfaces/IBaseDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IBaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:21437

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:21679

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

Defined in: main.ts:21447

#### Parameters

##### data

`any`

#### Returns

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)
