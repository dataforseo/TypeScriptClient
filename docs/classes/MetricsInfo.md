[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MetricsInfo

# Class: MetricsInfo

## Implements

- [`IMetricsInfo`](../interfaces/IMetricsInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MetricsInfo.md#constructor)

### Properties

- [count](MetricsInfo.md#count)
- [estimated\_paid\_traffic\_cost](MetricsInfo.md#estimated_paid_traffic_cost)
- [etv](MetricsInfo.md#etv)
- [impressions\_etv](MetricsInfo.md#impressions_etv)
- [is\_down](MetricsInfo.md#is_down)
- [is\_lost](MetricsInfo.md#is_lost)
- [is\_new](MetricsInfo.md#is_new)
- [is\_up](MetricsInfo.md#is_up)
- [pos\_1](MetricsInfo.md#pos_1)
- [pos\_11\_20](MetricsInfo.md#pos_11_20)
- [pos\_21\_30](MetricsInfo.md#pos_21_30)
- [pos\_2\_3](MetricsInfo.md#pos_2_3)
- [pos\_31\_40](MetricsInfo.md#pos_31_40)
- [pos\_41\_50](MetricsInfo.md#pos_41_50)
- [pos\_4\_10](MetricsInfo.md#pos_4_10)
- [pos\_51\_60](MetricsInfo.md#pos_51_60)
- [pos\_61\_70](MetricsInfo.md#pos_61_70)
- [pos\_71\_80](MetricsInfo.md#pos_71_80)
- [pos\_81\_90](MetricsInfo.md#pos_81_90)
- [pos\_91\_100](MetricsInfo.md#pos_91_100)

### Methods

- [init](MetricsInfo.md#init)
- [toJSON](MetricsInfo.md#tojson)
- [fromJS](MetricsInfo.md#fromjs)

## Constructors

### constructor

• **new MetricsInfo**(`data?`): [`MetricsInfo`](MetricsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMetricsInfo`](../interfaces/IMetricsInfo.md) |

#### Returns

[`MetricsInfo`](MetricsInfo.md)

#### Defined in

[main.ts:75795](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75795)

## Properties

### count

• `Optional` **count**: `number`

total count of organic SERPs that contain the domain

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[count](../interfaces/IMetricsInfo.md#count)

#### Defined in

[main.ts:75774](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75774)

___


### estimated\_paid\_traffic\_cost

• `Optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads (USD) for all keywords a domain ranks for
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[estimated_paid_traffic_cost](../interfaces/IMetricsInfo.md#estimated_paid_traffic_cost)

#### Defined in

[main.ts:75779](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75779)

___


### etv

• `Optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[etv](../interfaces/IMetricsInfo.md#etv)

#### Defined in

[main.ts:75767](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75767)

___


### impressions\_etv

• `Optional` **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[impressions_etv](../interfaces/IMetricsInfo.md#impressions_etv)

#### Defined in

[main.ts:75772](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75772)

___


### is\_down

• `Optional` **is\_down**: `number`

rank went down
indicates how many ranked elements of this domain went down in Google Search

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[is_down](../interfaces/IMetricsInfo.md#is_down)

#### Defined in

[main.ts:75788](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75788)

___


### is\_lost

• `Optional` **is\_lost**: `number`

lost ranked elements
indicates how many ranked elements of this domain were previously presented in SERPs, but weren’t found during the last check

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[is_lost](../interfaces/IMetricsInfo.md#is_lost)

#### Defined in

[main.ts:75791](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75791)

___


### is\_new

• `Optional` **is\_new**: `number`

number of new ranked elements
indicates how many new ranked elements were found for this domain

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[is_new](../interfaces/IMetricsInfo.md#is_new)

#### Defined in

[main.ts:75782](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75782)

___


### is\_up

• `Optional` **is\_up**: `number`

rank went up
indicates how many ranked elements of this domain went up in Google Search

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[is_up](../interfaces/IMetricsInfo.md#is_up)

#### Defined in

[main.ts:75785](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75785)

___


### pos\_1

• `Optional` **pos\_1**: `number`

number of organic SERPs where the domain ranks #1

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[pos_1](../interfaces/IMetricsInfo.md#pos_1)

#### Defined in

[main.ts:75740](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75740)

___


### pos\_11\_20

• `Optional` **pos\_11\_20**: `number`

number of organic SERPs where the domain ranks #11-20

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[pos_11_20](../interfaces/IMetricsInfo.md#pos_11_20)

#### Defined in

[main.ts:75746](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75746)

___


### pos\_21\_30

• `Optional` **pos\_21\_30**: `number`

number of organic SERPs where the domain ranks #21-30

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[pos_21_30](../interfaces/IMetricsInfo.md#pos_21_30)

#### Defined in

[main.ts:75748](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75748)

___


### pos\_2\_3

• `Optional` **pos\_2\_3**: `number`

number of organic SERPs where the domain ranks #2-3

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[pos_2_3](../interfaces/IMetricsInfo.md#pos_2_3)

#### Defined in

[main.ts:75742](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75742)

___


### pos\_31\_40

• `Optional` **pos\_31\_40**: `number`

number of organic SERPs where the domain ranks #31-40

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[pos_31_40](../interfaces/IMetricsInfo.md#pos_31_40)

#### Defined in

[main.ts:75750](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75750)

___


### pos\_41\_50

• `Optional` **pos\_41\_50**: `number`

number of organic SERPs where the domain ranks #41-50

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[pos_41_50](../interfaces/IMetricsInfo.md#pos_41_50)

#### Defined in

[main.ts:75752](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75752)

___


### pos\_4\_10

• `Optional` **pos\_4\_10**: `number`

number of organic SERPs where the domain ranks #4-10

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[pos_4_10](../interfaces/IMetricsInfo.md#pos_4_10)

#### Defined in

[main.ts:75744](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75744)

___


### pos\_51\_60

• `Optional` **pos\_51\_60**: `number`

number of organic SERPs where the domain ranks #51-60

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[pos_51_60](../interfaces/IMetricsInfo.md#pos_51_60)

#### Defined in

[main.ts:75754](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75754)

___


### pos\_61\_70

• `Optional` **pos\_61\_70**: `number`

number of organic SERPs where the domain ranks #61-70

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[pos_61_70](../interfaces/IMetricsInfo.md#pos_61_70)

#### Defined in

[main.ts:75756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75756)

___


### pos\_71\_80

• `Optional` **pos\_71\_80**: `number`

number of organic SERPs where the domain ranks #71-80

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[pos_71_80](../interfaces/IMetricsInfo.md#pos_71_80)

#### Defined in

[main.ts:75758](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75758)

___


### pos\_81\_90

• `Optional` **pos\_81\_90**: `number`

number of organic SERPs where the domain ranks #81-90

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[pos_81_90](../interfaces/IMetricsInfo.md#pos_81_90)

#### Defined in

[main.ts:75760](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75760)

___


### pos\_91\_100

• `Optional` **pos\_91\_100**: `number`

number of organic SERPs where the domain ranks #91-100

#### Implementation of

[IMetricsInfo](../interfaces/IMetricsInfo.md).[pos_91_100](../interfaces/IMetricsInfo.md#pos_91_100)

#### Defined in

[main.ts:75762](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75762)

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

[main.ts:75804](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75804)

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

[main.ts:75840](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75840)

___


### fromJS

▸ **fromJS**(`data`): [`MetricsInfo`](MetricsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MetricsInfo`](MetricsInfo.md)

#### Defined in

[main.ts:75833](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75833)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")