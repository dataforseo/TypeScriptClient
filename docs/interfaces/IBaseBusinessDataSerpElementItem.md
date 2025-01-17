[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBaseBusinessDataSerpElementItem

# Interface: IBaseBusinessDataSerpElementItem

Defined in: main.ts:22288

## Extended by

- [`IMapsSearchBusinessDataSerpElementItem`](IMapsSearchBusinessDataSerpElementItem.md)
- [`IGoogleBusinessInfoBusinessDataSerpElementItem`](IGoogleBusinessInfoBusinessDataSerpElementItem.md)
- [`IGoogleBusinessPostBusinessDataSerpElementItem`](IGoogleBusinessPostBusinessDataSerpElementItem.md)
- [`IGoogleReviewsSearchBusinessDataSerpElementItem`](IGoogleReviewsSearchBusinessDataSerpElementItem.md)
- [`ITrustpilotSearchOrganicBusinessDataSerpElementItem`](ITrustpilotSearchOrganicBusinessDataSerpElementItem.md)
- [`ITrustpilotReviewSearchBusinessDataSerpElementItem`](ITrustpilotReviewSearchBusinessDataSerpElementItem.md)
- [`ITripadvisorSearchOrganicBusinessDataSerpElementItem`](ITripadvisorSearchOrganicBusinessDataSerpElementItem.md)
- [`ITripadvisorReviewSearchBusinessDataSerpElementItem`](ITripadvisorReviewSearchBusinessDataSerpElementItem.md)

## Properties

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22295

absolute rank among all the elements

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22293

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22290

type of element
