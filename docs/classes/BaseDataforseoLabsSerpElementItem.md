**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BaseDataforseoLabsSerpElementItem

# Class: BaseDataforseoLabsSerpElementItem

## Extended by

- [`OrganicDataforseoLabsSerpElementItem`](OrganicDataforseoLabsSerpElementItem.md)
- [`PaidDataforseoLabsSerpElementItem`](PaidDataforseoLabsSerpElementItem.md)
- [`KnowledgeGraphDataforseoLabsSerpElementItem`](KnowledgeGraphDataforseoLabsSerpElementItem.md)
- [`PeopleAlsoAskDataforseoLabsSerpElementItem`](PeopleAlsoAskDataforseoLabsSerpElementItem.md)
- [`PeopleAlsoSearchDataforseoLabsSerpElementItem`](PeopleAlsoSearchDataforseoLabsSerpElementItem.md)
- [`RelatedSearchesDataforseoLabsSerpElementItem`](RelatedSearchesDataforseoLabsSerpElementItem.md)
- [`KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)
- [`KnowledgeGraphRowItemDataforseoLabsSerpElementItem`](KnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)
- [`KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](KnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)
- [`TwitterDataforseoLabsSerpElementItem`](TwitterDataforseoLabsSerpElementItem.md)
- [`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)
- [`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)
- [`MultiCarouselDataforseoLabsSerpElementItem`](MultiCarouselDataforseoLabsSerpElementItem.md)
- [`TopStoriesDataforseoLabsSerpElementItem`](TopStoriesDataforseoLabsSerpElementItem.md)
- [`AnswerBoxDataforseoLabsSerpElementItem`](AnswerBoxDataforseoLabsSerpElementItem.md)
- [`MathSolverDataforseoLabsSerpElementItem`](MathSolverDataforseoLabsSerpElementItem.md)
- [`VideoDataforseoLabsSerpElementItem`](VideoDataforseoLabsSerpElementItem.md)
- [`MapDataforseoLabsSerpElementItem`](MapDataforseoLabsSerpElementItem.md)
- [`FeaturedSnippetDataforseoLabsSerpElementItem`](FeaturedSnippetDataforseoLabsSerpElementItem.md)
- [`LocalPackDataforseoLabsSerpElementItem`](LocalPackDataforseoLabsSerpElementItem.md)
- [`HotelsPackDataforseoLabsSerpElementItem`](HotelsPackDataforseoLabsSerpElementItem.md)
- [`KnowledgeGraphListItemDataforseoLabsSerpElementItem`](KnowledgeGraphListItemDataforseoLabsSerpElementItem.md)
- [`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)
- [`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)
- [`KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](KnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)
- [`GoogleReviewsDataforseoLabsSerpElementItem`](GoogleReviewsDataforseoLabsSerpElementItem.md)
- [`GooglePostsDataforseoLabsSerpElementItem`](GooglePostsDataforseoLabsSerpElementItem.md)
- [`GoogleFlightsDataforseoLabsSerpElementItem`](GoogleFlightsDataforseoLabsSerpElementItem.md)
- [`ImagesDataforseoLabsSerpElementItem`](ImagesDataforseoLabsSerpElementItem.md)
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

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BaseDataforseoLabsSerpElementItem(data)

> **new BaseDataforseoLabsSerpElementItem**(`data`?): [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IBaseDataforseoLabsSerpElementItem`](../interfaces/IBaseDataforseoLabsSerpElementItem.md)

#### Returns

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

#### Source

main.ts:20245

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Source

main.ts:20243

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:20255

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:20496

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

#### Source

main.ts:20264
