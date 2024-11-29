[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBaseBusinessDataSerpElementItem

# Interface: IBaseBusinessDataSerpElementItem

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

absolute rank among all the elements

#### Defined in

main.ts:22295

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Defined in

main.ts:22293

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:22290
