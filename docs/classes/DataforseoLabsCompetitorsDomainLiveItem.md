[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsCompetitorsDomainLiveItem

# Class: DataforseoLabsCompetitorsDomainLiveItem

## Implements

- [`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsCompetitorsDomainLiveItem()

> **new DataforseoLabsCompetitorsDomainLiveItem**(`data`?): [`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md)

#### Returns

[`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)

#### Defined in

main.ts:94428

## Properties

### avg\_position?

> `optional` **avg\_position**: `number`

average position of the domain in SERP
Note: average position is calculated for intersected keywords only;
the value for a given domain may differ when combined with different target websites

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`avg_position`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#avg_position)

#### Defined in

main.ts:94407

***

### competitor\_metrics?

> `optional` **competitor\_metrics**: `object`

metrics for intersecting keywords
ranking and traffic data relevant to the keywords that the provided domain shares with the target domain
note: in this array ranking and traffic data is provided for the returned competitor’s domain

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`competitor_metrics`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#competitor_metrics)

#### Defined in

main.ts:94424

***

### domain?

> `optional` **domain**: `string`

domain name

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`domain`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#domain)

#### Defined in

main.ts:94403

***

### full\_domain\_metrics?

> `optional` **full\_domain\_metrics**: `object`

metrics for all keywords of the domain
full overview of ranking and traffic data relevant to all keywords that the provided domain is ranking for

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`full_domain_metrics`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#full_domain_metrics)

#### Defined in

main.ts:94416

***

### intersections?

> `optional` **intersections**: `number`

number of intersecting keywords

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`intersections`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#intersections)

#### Defined in

main.ts:94413

***

### metrics?

> `optional` **metrics**: `object`

metrics for intersecting keywords
ranking and traffic data relevant to the keywords that the provided domain shares with the target domain
note: in this array ranking and traffic data is provided for the target considering the keywords target shares in search with the competitor’s domain

#### Index Signature

 \[`key`: `string`\]: [`DataforseoLabsMetricsInfo`](DataforseoLabsMetricsInfo.md)

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`metrics`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#metrics)

#### Defined in

main.ts:94420

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#se_type)

#### Defined in

main.ts:94401

***

### sum\_position?

> `optional` **sum\_position**: `number`

sum of all domain positions in SERP
Note: average position is calculated for intersected keywords only;
the value for a given domain may differ when combined with different target websites

#### Implementation of

[`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[`sum_position`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#sum_position)

#### Defined in

main.ts:94411

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:94437

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:94479

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)

#### Defined in

main.ts:94472
