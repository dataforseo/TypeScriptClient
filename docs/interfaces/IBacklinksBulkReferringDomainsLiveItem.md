[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksBulkReferringDomainsLiveItem

# Interface: IBacklinksBulkReferringDomainsLiveItem

## Implemented by

- [`BacklinksBulkReferringDomainsLiveItem`](../classes/BacklinksBulkReferringDomainsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [referring\_domains](IBacklinksBulkReferringDomainsLiveItem.md#referring_domains)
- [referring\_domains\_nofollow](IBacklinksBulkReferringDomainsLiveItem.md#referring_domains_nofollow)
- [referring\_main\_domains](IBacklinksBulkReferringDomainsLiveItem.md#referring_main_domains)
- [referring\_main\_domains\_nofollow](IBacklinksBulkReferringDomainsLiveItem.md#referring_main_domains_nofollow)
- [target](IBacklinksBulkReferringDomainsLiveItem.md#target)

## Properties

### referring\_domains

• `Optional` **referring\_domains**: `number`

number of referring domains pointing to the target
note that we calculate main domains (root domains, like example.com) and their subdomains (e.g. blog.example.com) separately for this metric

#### Defined in

[main.ts:140489](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140489)

___


### referring\_domains\_nofollow

• `Optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Defined in

[main.ts:140491](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140491)

___


### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

number of referring main domains pointing to the target
the number of primary (root) domains referring to your target

#### Defined in

[main.ts:140494](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140494)

___


### referring\_main\_domains\_nofollow

• `Optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Defined in

[main.ts:140496](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140496)

___


### target

• `Optional` **target**: `string`

domain, subdomain or webpage from a POST array

#### Defined in

[main.ts:140486](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140486)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")