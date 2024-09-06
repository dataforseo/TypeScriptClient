[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBaseDataforseoLabsSerpElementItem

# Interface: IBaseDataforseoLabsSerpElementItem

## Extended by

- [`IOrganicDataforseoLabsSerpElementItem`](IOrganicDataforseoLabsSerpElementItem.md)
- [`IPeopleAlsoAskDataforseoLabsSerpElementItem`](IPeopleAlsoAskDataforseoLabsSerpElementItem.md)
- [`ITwitterDataforseoLabsSerpElementItem`](ITwitterDataforseoLabsSerpElementItem.md)
- [`IRelatedSearchesDataforseoLabsSerpElementItem`](IRelatedSearchesDataforseoLabsSerpElementItem.md)
- [`IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem`](IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem.md)
- [`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)
- [`IKnowledgeGraphRowItemDataforseoLabsSerpElementItem`](IKnowledgeGraphRowItemDataforseoLabsSerpElementItem.md)
- [`IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem`](IKnowledgeGraphCarouselItemDataforseoLabsSerpElementItem.md)
- [`IKnowledgeGraphDataforseoLabsSerpElementItem`](IKnowledgeGraphDataforseoLabsSerpElementItem.md)
- [`ICarouselDataforseoLabsSerpElementItem`](ICarouselDataforseoLabsSerpElementItem.md)
- [`IMultiCarouselDataforseoLabsSerpElementItem`](IMultiCarouselDataforseoLabsSerpElementItem.md)
- [`ITopStoriesDataforseoLabsSerpElementItem`](ITopStoriesDataforseoLabsSerpElementItem.md)
- [`IAnswerBoxDataforseoLabsSerpElementItem`](IAnswerBoxDataforseoLabsSerpElementItem.md)
- [`IMathSolverDataforseoLabsSerpElementItem`](IMathSolverDataforseoLabsSerpElementItem.md)
- [`IVideoDataforseoLabsSerpElementItem`](IVideoDataforseoLabsSerpElementItem.md)
- [`IPeopleAlsoSearchDataforseoLabsSerpElementItem`](IPeopleAlsoSearchDataforseoLabsSerpElementItem.md)
- [`IMapDataforseoLabsSerpElementItem`](IMapDataforseoLabsSerpElementItem.md)
- [`IFeaturedSnippetDataforseoLabsSerpElementItem`](IFeaturedSnippetDataforseoLabsSerpElementItem.md)
- [`ILocalPackDataforseoLabsSerpElementItem`](ILocalPackDataforseoLabsSerpElementItem.md)
- [`IHotelsPackDataforseoLabsSerpElementItem`](IHotelsPackDataforseoLabsSerpElementItem.md)
- [`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`](IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md)
- [`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`](IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)
- [`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)
- [`IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem`](IKnowledgeGraphShoppingItemDataforseoLabsSerpElementItem.md)
- [`IPaidDataforseoLabsSerpElementItem`](IPaidDataforseoLabsSerpElementItem.md)
- [`IGoogleReviewsDataforseoLabsSerpElementItem`](IGoogleReviewsDataforseoLabsSerpElementItem.md)
- [`IGooglePostsDataforseoLabsSerpElementItem`](IGooglePostsDataforseoLabsSerpElementItem.md)
- [`IGoogleFlightsDataforseoLabsSerpElementItem`](IGoogleFlightsDataforseoLabsSerpElementItem.md)
- [`IImagesDataforseoLabsSerpElementItem`](IImagesDataforseoLabsSerpElementItem.md)
- [`IShoppingDataforseoLabsSerpElementItem`](IShoppingDataforseoLabsSerpElementItem.md)
- [`IJobsDataforseoLabsSerpElementItem`](IJobsDataforseoLabsSerpElementItem.md)
- [`IEventsDataforseoLabsSerpElementItem`](IEventsDataforseoLabsSerpElementItem.md)
- [`IMentionCarouselDataforseoLabsSerpElementItem`](IMentionCarouselDataforseoLabsSerpElementItem.md)
- [`IRecipesDataforseoLabsSerpElementItem`](IRecipesDataforseoLabsSerpElementItem.md)
- [`ITopSightsDataforseoLabsSerpElementItem`](ITopSightsDataforseoLabsSerpElementItem.md)
- [`IScholarlyArticlesDataforseoLabsSerpElementItem`](IScholarlyArticlesDataforseoLabsSerpElementItem.md)
- [`IPopularProductsDataforseoLabsSerpElementItem`](IPopularProductsDataforseoLabsSerpElementItem.md)
- [`IPodcastsDataforseoLabsSerpElementItem`](IPodcastsDataforseoLabsSerpElementItem.md)
- [`IQuestionsAndAnswersDataforseoLabsSerpElementItem`](IQuestionsAndAnswersDataforseoLabsSerpElementItem.md)
- [`IFindResultsOnDataforseoLabsSerpElementItem`](IFindResultsOnDataforseoLabsSerpElementItem.md)
- [`IStocksBoxDataforseoLabsSerpElementItem`](IStocksBoxDataforseoLabsSerpElementItem.md)
- [`IVisualStoriesDataforseoLabsSerpElementItem`](IVisualStoriesDataforseoLabsSerpElementItem.md)
- [`ICommercialUnitsDataforseoLabsSerpElementItem`](ICommercialUnitsDataforseoLabsSerpElementItem.md)
- [`ILocalServicesDataforseoLabsSerpElementItem`](ILocalServicesDataforseoLabsSerpElementItem.md)
- [`IGoogleHotelsDataforseoLabsSerpElementItem`](IGoogleHotelsDataforseoLabsSerpElementItem.md)

## Properties

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:21025

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:21021

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:21018

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:21015

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:21027
