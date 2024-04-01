[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsCompetitorsDomainLiveItem

# Interface: IDataforseoLabsCompetitorsDomainLiveItem

## Implemented by

- [`DataforseoLabsCompetitorsDomainLiveItem`](../classes/DataforseoLabsCompetitorsDomainLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [avg\_position](IDataforseoLabsCompetitorsDomainLiveItem.md#avg_position)
- [competitor\_metrics](IDataforseoLabsCompetitorsDomainLiveItem.md#competitor_metrics)
- [domain](IDataforseoLabsCompetitorsDomainLiveItem.md#domain)
- [full\_domain\_metrics](IDataforseoLabsCompetitorsDomainLiveItem.md#full_domain_metrics)
- [intersections](IDataforseoLabsCompetitorsDomainLiveItem.md#intersections)
- [metrics](IDataforseoLabsCompetitorsDomainLiveItem.md#metrics)
- [se\_type](IDataforseoLabsCompetitorsDomainLiveItem.md#se_type)
- [sum\_position](IDataforseoLabsCompetitorsDomainLiveItem.md#sum_position)

## Properties

### avg\_position

• `Optional` **avg\_position**: `number`

average position of the domain in SERP
Note: average position is calculated for intersected keywords only;
the value for a given domain may differ when combined with different target websites

#### Defined in

main.ts:90863

___

### competitor\_metrics

• `Optional` **competitor\_metrics**: `Object`

metrics for intersecting keywords
ranking and traffic data relevant to the keywords that the provided domain shares with the target domain
note: in this array ranking and traffic data is provided for the returned competitor’s domain

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](../classes/MetricsInfo.md)

#### Defined in

main.ts:90880

___

### domain

• `Optional` **domain**: `string`

domain name

#### Defined in

main.ts:90859

___

### full\_domain\_metrics

• `Optional` **full\_domain\_metrics**: `Object`

metrics for all keywords of the domain
full overview of ranking and traffic data relevant to all keywords that the provided domain is ranking for

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](../classes/MetricsInfo.md)

#### Defined in

main.ts:90872

___

### intersections

• `Optional` **intersections**: `number`

number of intersecting keywords

#### Defined in

main.ts:90869

___

### metrics

• `Optional` **metrics**: `Object`

metrics for intersecting keywords
ranking and traffic data relevant to the keywords that the provided domain shares with the target domain
note: in this array ranking and traffic data is provided for the target considering the keywords target shares in search with the competitor’s domain

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](../classes/MetricsInfo.md)

#### Defined in

main.ts:90876

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:90857

___

### sum\_position

• `Optional` **sum\_position**: `number`

sum of all domain positions in SERP
Note: average position is calculated for intersected keywords only;
the value for a given domain may differ when combined with different target websites

#### Defined in

main.ts:90867
