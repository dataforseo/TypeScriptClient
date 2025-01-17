[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBaseSerpElementItem

# Interface: IBaseSerpElementItem

Defined in: main.ts:21391

## Extended by

- [`IPaidSerpElementItem`](IPaidSerpElementItem.md)
- [`IOrganicSerpElementItem`](IOrganicSerpElementItem.md)
- [`IFeaturedSnippetSerpElementItem`](IFeaturedSnippetSerpElementItem.md)
- [`IKnowledgeGraphCarouselItemSerpElementItem`](IKnowledgeGraphCarouselItemSerpElementItem.md)
- [`IKnowledgeGraphDescriptionItemSerpElementItem`](IKnowledgeGraphDescriptionItemSerpElementItem.md)
- [`IKnowledgeGraphImagesItemSerpElementItem`](IKnowledgeGraphImagesItemSerpElementItem.md)
- [`IKnowledgeGraphListItemSerpElementItem`](IKnowledgeGraphListItemSerpElementItem.md)
- [`IKnowledgeGraphRowItemSerpElementItem`](IKnowledgeGraphRowItemSerpElementItem.md)
- [`IKnowledgeGraphExpandedItemSerpElementItem`](IKnowledgeGraphExpandedItemSerpElementItem.md)
- [`IKnowledgeGraphPartItemSerpElementItem`](IKnowledgeGraphPartItemSerpElementItem.md)
- [`IKnowledgeGraphShoppingItemSerpElementItem`](IKnowledgeGraphShoppingItemSerpElementItem.md)
- [`IKnowledgeGraphHotelsBookingItemSerpElementItem`](IKnowledgeGraphHotelsBookingItemSerpElementItem.md)
- [`IKnowledgeGraphAiOverviewItemSerpElementItem`](IKnowledgeGraphAiOverviewItemSerpElementItem.md)
- [`IKnowledgeGraphSerpElementItem`](IKnowledgeGraphSerpElementItem.md)
- [`ITopStoriesSerpElementItem`](ITopStoriesSerpElementItem.md)
- [`IPeopleAlsoAskSerpElementItem`](IPeopleAlsoAskSerpElementItem.md)
- [`IPeopleAlsoSearchSerpElementItem`](IPeopleAlsoSearchSerpElementItem.md)
- [`IImagesSerpElementItem`](IImagesSerpElementItem.md)
- [`ITwitterSerpElementItem`](ITwitterSerpElementItem.md)
- [`IGoogleReviewsSerpElementItem`](IGoogleReviewsSerpElementItem.md)
- [`IJobsSerpElementItem`](IJobsSerpElementItem.md)
- [`IMapSerpElementItem`](IMapSerpElementItem.md)
- [`IAppSerpElementItem`](IAppSerpElementItem.md)
- [`ILocalPackSerpElementItem`](ILocalPackSerpElementItem.md)
- [`ICarouselSerpElementItem`](ICarouselSerpElementItem.md)
- [`IVideoSerpElementItem`](IVideoSerpElementItem.md)
- [`IAnswerBoxSerpElementItem`](IAnswerBoxSerpElementItem.md)
- [`IShoppingSerpElementItem`](IShoppingSerpElementItem.md)
- [`IGoogleFlightsSerpElementItem`](IGoogleFlightsSerpElementItem.md)
- [`IMentionCarouselSerpElementItem`](IMentionCarouselSerpElementItem.md)
- [`IEventsSerpElementItem`](IEventsSerpElementItem.md)
- [`IRelatedSearchesSerpElementItem`](IRelatedSearchesSerpElementItem.md)
- [`IMultiCarouselSerpElementItem`](IMultiCarouselSerpElementItem.md)
- [`IRecipesSerpElementItem`](IRecipesSerpElementItem.md)
- [`ITopSightsSerpElementItem`](ITopSightsSerpElementItem.md)
- [`IScholarlyArticlesSerpElementItem`](IScholarlyArticlesSerpElementItem.md)
- [`IPopularProductsSerpElementItem`](IPopularProductsSerpElementItem.md)
- [`IPodcastsSerpElementItem`](IPodcastsSerpElementItem.md)
- [`IStocksBoxSerpElementItem`](IStocksBoxSerpElementItem.md)
- [`IFindResultsOnSerpElementItem`](IFindResultsOnSerpElementItem.md)
- [`IQuestionsAndAnswersSerpElementItem`](IQuestionsAndAnswersSerpElementItem.md)
- [`IHotelsPackSerpElementItem`](IHotelsPackSerpElementItem.md)
- [`IVisualStoriesSerpElementItem`](IVisualStoriesSerpElementItem.md)
- [`ICommercialUnitsSerpElementItem`](ICommercialUnitsSerpElementItem.md)
- [`ILocalServicesSerpElementItem`](ILocalServicesSerpElementItem.md)
- [`IGoogleHotelsSerpElementItem`](IGoogleHotelsSerpElementItem.md)
- [`IMathSolverSerpElementItem`](IMathSolverSerpElementItem.md)
- [`ICurrencyBoxSerpElementItem`](ICurrencyBoxSerpElementItem.md)
- [`IGooglePostsSerpElementItem`](IGooglePostsSerpElementItem.md)
- [`IProductConsiderationsSerpElementItem`](IProductConsiderationsSerpElementItem.md)
- [`IFoundOnWebSerpElementItem`](IFoundOnWebSerpElementItem.md)
- [`IShortVideosSerpElementItem`](IShortVideosSerpElementItem.md)
- [`IRefineProductsSerpElementItem`](IRefineProductsSerpElementItem.md)
- [`IExploreBrandsSerpElementItem`](IExploreBrandsSerpElementItem.md)
- [`IPerspectivesSerpElementItem`](IPerspectivesSerpElementItem.md)
- [`IDiscussionsAndForumsSerpElementItem`](IDiscussionsAndForumsSerpElementItem.md)
- [`ICompareSitesSerpElementItem`](ICompareSitesSerpElementItem.md)
- [`ICoursesSerpElementItem`](ICoursesSerpElementItem.md)
- [`IAiOverviewSerpElementItem`](IAiOverviewSerpElementItem.md)
- [`IEventItemSerpElementItem`](IEventItemSerpElementItem.md)
- [`IDictionarySerpElementItem`](IDictionarySerpElementItem.md)

## Properties

### position?

> `optional` **position**: `string`

Defined in: main.ts:21404

the alignment of the element in SERP
can take the following values:
left, right

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21400

absolute rank in SERP
absolute position among all the elements in SERP

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21397

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21393

type of element

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21406

the XPath of the element
