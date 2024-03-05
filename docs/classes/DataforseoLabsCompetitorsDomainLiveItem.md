[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsCompetitorsDomainLiveItem

# Class: DataforseoLabsCompetitorsDomainLiveItem

## Implements

- [`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsCompetitorsDomainLiveItem.md#constructor)

### Properties

- [avg\_position](DataforseoLabsCompetitorsDomainLiveItem.md#avg_position)
- [competitor\_metrics](DataforseoLabsCompetitorsDomainLiveItem.md#competitor_metrics)
- [domain](DataforseoLabsCompetitorsDomainLiveItem.md#domain)
- [full\_domain\_metrics](DataforseoLabsCompetitorsDomainLiveItem.md#full_domain_metrics)
- [intersections](DataforseoLabsCompetitorsDomainLiveItem.md#intersections)
- [metrics](DataforseoLabsCompetitorsDomainLiveItem.md#metrics)
- [se\_type](DataforseoLabsCompetitorsDomainLiveItem.md#se_type)
- [sum\_position](DataforseoLabsCompetitorsDomainLiveItem.md#sum_position)

### Methods

- [init](DataforseoLabsCompetitorsDomainLiveItem.md#init)
- [toJSON](DataforseoLabsCompetitorsDomainLiveItem.md#tojson)
- [fromJS](DataforseoLabsCompetitorsDomainLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsCompetitorsDomainLiveItem**(`data?`): [`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsCompetitorsDomainLiveItem`](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md) |

#### Returns

[`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)

#### Defined in

[main.ts:88391](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88391)

## Properties

### avg\_position

• `Optional` **avg\_position**: `number`

average position of the domain in SERP
Note: average position is calculated for intersected keywords only;
the value for a given domain may differ when combined with different target websites

#### Implementation of

[IDataforseoLabsCompetitorsDomainLiveItem](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[avg_position](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#avg_position)

#### Defined in

[main.ts:88370](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88370)

___

### competitor\_metrics

• `Optional` **competitor\_metrics**: `Object`

metrics for intersecting keywords
ranking and traffic data relevant to the keywords that the provided domain shares with the target domain
note: in this array ranking and traffic data is provided for the returned competitor’s domain

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[IDataforseoLabsCompetitorsDomainLiveItem](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[competitor_metrics](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#competitor_metrics)

#### Defined in

[main.ts:88387](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88387)

___

### domain

• `Optional` **domain**: `string`

domain name

#### Implementation of

[IDataforseoLabsCompetitorsDomainLiveItem](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[domain](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#domain)

#### Defined in

[main.ts:88366](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88366)

___

### full\_domain\_metrics

• `Optional` **full\_domain\_metrics**: `Object`

metrics for all keywords of the domain
full overview of ranking and traffic data relevant to all keywords that the provided domain is ranking for

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[IDataforseoLabsCompetitorsDomainLiveItem](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[full_domain_metrics](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#full_domain_metrics)

#### Defined in

[main.ts:88379](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88379)

___

### intersections

• `Optional` **intersections**: `number`

number of intersecting keywords

#### Implementation of

[IDataforseoLabsCompetitorsDomainLiveItem](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[intersections](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#intersections)

#### Defined in

[main.ts:88376](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88376)

___

### metrics

• `Optional` **metrics**: `Object`

metrics for intersecting keywords
ranking and traffic data relevant to the keywords that the provided domain shares with the target domain
note: in this array ranking and traffic data is provided for the target considering the keywords target shares in search with the competitor’s domain

#### Index signature

▪ [key: `string`]: [`MetricsInfo`](MetricsInfo.md)

#### Implementation of

[IDataforseoLabsCompetitorsDomainLiveItem](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[metrics](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#metrics)

#### Defined in

[main.ts:88383](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88383)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsCompetitorsDomainLiveItem](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[se_type](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#se_type)

#### Defined in

[main.ts:88364](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88364)

___

### sum\_position

• `Optional` **sum\_position**: `number`

sum of all domain positions in SERP
Note: average position is calculated for intersected keywords only;
the value for a given domain may differ when combined with different target websites

#### Implementation of

[IDataforseoLabsCompetitorsDomainLiveItem](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md).[sum_position](../interfaces/IDataforseoLabsCompetitorsDomainLiveItem.md#sum_position)

#### Defined in

[main.ts:88374](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88374)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:88400](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88400)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:88442](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88442)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsCompetitorsDomainLiveItem`](DataforseoLabsCompetitorsDomainLiveItem.md)

#### Defined in

[main.ts:88435](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88435)
