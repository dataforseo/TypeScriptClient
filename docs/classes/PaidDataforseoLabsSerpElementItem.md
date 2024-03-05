[dataforseo-client](../README.md) / [Exports](../modules.md) / PaidDataforseoLabsSerpElementItem

# Class: PaidDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`PaidDataforseoLabsSerpElementItem`**

## Implements

- [`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PaidDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](PaidDataforseoLabsSerpElementItem.md#_discriminator)
- [backlinks\_info](PaidDataforseoLabsSerpElementItem.md#backlinks_info)
- [breadcrumb](PaidDataforseoLabsSerpElementItem.md#breadcrumb)
- [description](PaidDataforseoLabsSerpElementItem.md#description)
- [description\_rows](PaidDataforseoLabsSerpElementItem.md#description_rows)
- [domain](PaidDataforseoLabsSerpElementItem.md#domain)
- [estimated\_paid\_traffic\_cost](PaidDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)
- [etv](PaidDataforseoLabsSerpElementItem.md#etv)
- [extra](PaidDataforseoLabsSerpElementItem.md#extra)
- [highlighted](PaidDataforseoLabsSerpElementItem.md#highlighted)
- [impressions\_etv](PaidDataforseoLabsSerpElementItem.md#impressions_etv)
- [links](PaidDataforseoLabsSerpElementItem.md#links)
- [main\_domain](PaidDataforseoLabsSerpElementItem.md#main_domain)
- [position](PaidDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](PaidDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_changes](PaidDataforseoLabsSerpElementItem.md#rank_changes)
- [rank\_group](PaidDataforseoLabsSerpElementItem.md#rank_group)
- [rank\_info](PaidDataforseoLabsSerpElementItem.md#rank_info)
- [relative\_url](PaidDataforseoLabsSerpElementItem.md#relative_url)
- [se\_type](PaidDataforseoLabsSerpElementItem.md#se_type)
- [title](PaidDataforseoLabsSerpElementItem.md#title)
- [url](PaidDataforseoLabsSerpElementItem.md#url)
- [xpath](PaidDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](PaidDataforseoLabsSerpElementItem.md#init)
- [toJSON](PaidDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](PaidDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new PaidDataforseoLabsSerpElementItem**(`data?`): [`PaidDataforseoLabsSerpElementItem`](PaidDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPaidDataforseoLabsSerpElementItem`](../interfaces/IPaidDataforseoLabsSerpElementItem.md) |

#### Returns

[`PaidDataforseoLabsSerpElementItem`](PaidDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:94075](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94075)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___

### backlinks\_info

• `Optional` **backlinks\_info**: [`BacklinksInfo`](BacklinksInfo.md)

backlinks information for the target website

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[backlinks_info](../interfaces/IPaidDataforseoLabsSerpElementItem.md#backlinks_info)

#### Defined in

[main.ts:94069](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94069)

___

### breadcrumb

• `Optional` **breadcrumb**: `string`

breadcrumb of the Ad element in SERP

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[breadcrumb](../interfaces/IPaidDataforseoLabsSerpElementItem.md#breadcrumb)

#### Defined in

[main.ts:94031](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94031)

___

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[description](../interfaces/IPaidDataforseoLabsSerpElementItem.md#description)

#### Defined in

[main.ts:94029](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94029)

___

### description\_rows

• `Optional` **description\_rows**: `string`[]

extended description
if there is none, equals null

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[description_rows](../interfaces/IPaidDataforseoLabsSerpElementItem.md#description_rows)

#### Defined in

[main.ts:94040](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94040)

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[domain](../interfaces/IPaidDataforseoLabsSerpElementItem.md#domain)

#### Defined in

[main.ts:94027](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94027)

___

### estimated\_paid\_traffic\_cost

• `Optional` **estimated\_paid\_traffic\_cost**: `number`

estimated cost of converting organic search traffic into paid
represents the estimated monthly cost of running ads for the returned keyword
the metric is calculated as the product of organic etv and paid cpc values and indicates the cost of driving the estimated volume of monthly organic traffic through PPC advertising in Google Search
learn more about how the metric is calculated in this help center article

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[estimated_paid_traffic_cost](../interfaces/IPaidDataforseoLabsSerpElementItem.md#estimated_paid_traffic_cost)

#### Defined in

[main.ts:94061](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94061)

___

### etv

• `Optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[etv](../interfaces/IPaidDataforseoLabsSerpElementItem.md#etv)

#### Defined in

[main.ts:94051](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94051)

___

### extra

• `Optional` **extra**: `Object`

additional information about the result

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[extra](../interfaces/IPaidDataforseoLabsSerpElementItem.md#extra)

#### Defined in

[main.ts:94037](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94037)

___

### highlighted

• `Optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[highlighted](../interfaces/IPaidDataforseoLabsSerpElementItem.md#highlighted)

#### Defined in

[main.ts:94035](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94035)

___

### impressions\_etv

• `Optional` **impressions\_etv**: `number`

estimated traffic volume based on impressions
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and impressions values of the returned keyword
learn more about how the metric is calculated in this help center article

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[impressions_etv](../interfaces/IPaidDataforseoLabsSerpElementItem.md#impressions_etv)

#### Defined in

[main.ts:94056](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94056)

___

### links

• `Optional` **links**: [`AdLinkElement`](AdLinkElement.md)[]

link of the element

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[links](../interfaces/IPaidDataforseoLabsSerpElementItem.md#links)

#### Defined in

[main.ts:94042](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94042)

___

### main\_domain

• `Optional` **main\_domain**: `string`

primary domain name in SERP

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[main_domain](../interfaces/IPaidDataforseoLabsSerpElementItem.md#main_domain)

#### Defined in

[main.ts:94044](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94044)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[position](../interfaces/IPaidDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:94021](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94021)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IPaidDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:94017](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94017)

___

### rank\_changes

• `Optional` **rank\_changes**: [`RankChanges`](RankChanges.md)

changes in rankings
ranking changes of the SERP element compared to the preceding month;
Note: the changes are calculated even if the preceding month is not included in a POST request

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[rank_changes](../interfaces/IPaidDataforseoLabsSerpElementItem.md#rank_changes)

#### Defined in

[main.ts:94065](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94065)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IPaidDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:94014](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94014)

___

### rank\_info

• `Optional` **rank\_info**: [`RankInfo`](RankInfo.md)

page and domain rank information

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[rank_info](../interfaces/IPaidDataforseoLabsSerpElementItem.md#rank_info)

#### Defined in

[main.ts:94071](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94071)

___

### relative\_url

• `Optional` **relative\_url**: `string`

URL in SERP that does not specify the HTTPs protocol and domain name

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[relative_url](../interfaces/IPaidDataforseoLabsSerpElementItem.md#relative_url)

#### Defined in

[main.ts:94046](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94046)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[se_type](../interfaces/IPaidDataforseoLabsSerpElementItem.md#se_type)

#### Defined in

[main.ts:94067](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94067)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[title](../interfaces/IPaidDataforseoLabsSerpElementItem.md#title)

#### Defined in

[main.ts:94025](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94025)

___

### url

• `Optional` **url**: `string`

URL link

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[url](../interfaces/IPaidDataforseoLabsSerpElementItem.md#url)

#### Defined in

[main.ts:94033](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94033)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IPaidDataforseoLabsSerpElementItem](../interfaces/IPaidDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IPaidDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:94023](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94023)

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

[main.ts:94080](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94080)

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

[main.ts:94137](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94137)

___

### fromJS

▸ **fromJS**(`data`): [`PaidDataforseoLabsSerpElementItem`](PaidDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PaidDataforseoLabsSerpElementItem`](PaidDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:94130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94130)
