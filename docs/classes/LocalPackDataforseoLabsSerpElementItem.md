[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / LocalPackDataforseoLabsSerpElementItem

# Class: LocalPackDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`LocalPackDataforseoLabsSerpElementItem`**

## Implements

- [`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](LocalPackDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](LocalPackDataforseoLabsSerpElementItem.md#_discriminator)
- [backlinks\_info](LocalPackDataforseoLabsSerpElementItem.md#backlinks_info)
- [description](LocalPackDataforseoLabsSerpElementItem.md#description)
- [domain](LocalPackDataforseoLabsSerpElementItem.md#domain)
- [estimated\_paid\_traffic\_cost](LocalPackDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)
- [etv](LocalPackDataforseoLabsSerpElementItem.md#etv)
- [impressions\_etv](LocalPackDataforseoLabsSerpElementItem.md#impressions_etv)
- [is\_paid](LocalPackDataforseoLabsSerpElementItem.md#is_paid)
- [main\_domain](LocalPackDataforseoLabsSerpElementItem.md#main_domain)
- [phone](LocalPackDataforseoLabsSerpElementItem.md#phone)
- [position](LocalPackDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](LocalPackDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_changes](LocalPackDataforseoLabsSerpElementItem.md#rank_changes)
- [rank\_group](LocalPackDataforseoLabsSerpElementItem.md#rank_group)
- [rank\_info](LocalPackDataforseoLabsSerpElementItem.md#rank_info)
- [rating](LocalPackDataforseoLabsSerpElementItem.md#rating)
- [relative\_url](LocalPackDataforseoLabsSerpElementItem.md#relative_url)
- [se\_type](LocalPackDataforseoLabsSerpElementItem.md#se_type)
- [title](LocalPackDataforseoLabsSerpElementItem.md#title)
- [url](LocalPackDataforseoLabsSerpElementItem.md#url)
- [xpath](LocalPackDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](LocalPackDataforseoLabsSerpElementItem.md#init)
- [toJSON](LocalPackDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](LocalPackDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new LocalPackDataforseoLabsSerpElementItem**(`data?`): [`LocalPackDataforseoLabsSerpElementItem`](LocalPackDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILocalPackDataforseoLabsSerpElementItem`](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md) |

#### Returns

[`LocalPackDataforseoLabsSerpElementItem`](LocalPackDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:93325](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93325)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___


### backlinks\_info

• `Optional` **backlinks\_info**: [`AvgBacklinksInfo`](AvgBacklinksInfo.md)

backlinks information for the target website

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[backlinks_info](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#backlinks_info)

#### Defined in

[main.ts:93319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93319)

___


### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[description](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#description)

#### Defined in

[main.ts:93281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93281)

___


### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[domain](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#domain)

#### Defined in

[main.ts:93283](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93283)

___


### estimated\_paid\_traffic\_cost

• `Optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads for the returned keyword
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[estimated_paid_traffic_cost](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)

#### Defined in

[main.ts:93311](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93311)

___


### etv

• `Optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[etv](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#etv)

#### Defined in

[main.ts:93301](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93301)

___


### impressions\_etv

• `Optional` **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[impressions_etv](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#impressions_etv)

#### Defined in

[main.ts:93306](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93306)

___


### is\_paid

• `Optional` **is\_paid**: `boolean`

indicates whether the element is an ad

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[is_paid](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#is_paid)

#### Defined in

[main.ts:93289](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93289)

___


### main\_domain

• `Optional` **main\_domain**: `string`

primary domain name in SERP

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[main_domain](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#main_domain)

#### Defined in

[main.ts:93294](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93294)

___


### phone

• `Optional` **phone**: `string`

phone number

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[phone](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#phone)

#### Defined in

[main.ts:93285](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93285)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[position](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:93275](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93275)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:93271](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93271)

___


### rank\_changes

• `Optional` **rank\_changes**: [`RankChanges`](RankChanges.md)

changes in rankings
ranking changes of the SERP element compared to the preceding month;
Note: the changes are calculated even if the preceding month is not included in a POST request

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[rank_changes](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#rank_changes)

#### Defined in

[main.ts:93315](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93315)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:93268](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93268)

___


### rank\_info

• `Optional` **rank\_info**: [`RankInfo`](RankInfo.md)

page and domain rank information

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[rank_info](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#rank_info)

#### Defined in

[main.ts:93321](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93321)

___


### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[rating](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#rating)

#### Defined in

[main.ts:93292](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93292)

___


### relative\_url

• `Optional` **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[relative_url](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#relative_url)

#### Defined in

[main.ts:93296](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93296)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[se_type](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#se_type)

#### Defined in

[main.ts:93317](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93317)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[title](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#title)

#### Defined in

[main.ts:93279](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93279)

___


### url

• `Optional` **url**: `string`

URL link

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[url](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#url)

#### Defined in

[main.ts:93287](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93287)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[ILocalPackDataforseoLabsSerpElementItem](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md).[xpath](../interfaces/ILocalPackDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:93277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93277)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[init](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

[main.ts:93330](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93330)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[toJSON](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

[main.ts:93367](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93367)

___


### fromJS

▸ **fromJS**(`data`): [`LocalPackDataforseoLabsSerpElementItem`](LocalPackDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`LocalPackDataforseoLabsSerpElementItem`](LocalPackDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:93360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93360)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")