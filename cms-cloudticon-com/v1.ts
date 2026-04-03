/* eslint-disable */
/**
 * This file was automatically generated from a Kubernetes CRD.
 * DO NOT MODIFY IT BY HAND.
 */

import { resource, type ResourceManifest } from "../resource";

/**
 * AstroSpec defines the desired state of Astro.
 */
export interface AstroSpec {
  /**
   * BaseHref to opcjonalna ścieżka bazowa, jeśli strona ma być serwowana z podkatalogu.
   */
  baseHref?: string;
  /**
   * Domain to unikalna część domeny dla tej instancji.
   */
  domain: string;
  /**
   * EnvironmentRef wskazuje na Environment, z którym powiązana jest ta instancja Astro.
   */
  environmentRef: string;
  /**
   * GitBranch to branch Git, który powinien być używany do buildów.
   */
  gitBranch: string;
  /**
   * GitRepository to adres URL repozytorium Git zawierającego kod strony Astro.
   */
  gitRepository: string;
  /**
   * Image to obraz Docker zawierający statyczne pliki Astro oraz serwer WWW.
   */
  image: string;
  /**
   * NodeVersion to opcjonalna wersja Node.js używana do budowania strony Astro.
   */
  nodeVersion?: string;
  /**
   * Resources definiuje zasoby CPU/pamięci dla kontenera serwera WWW.
   */
  resources?: {
    /**
     * Claims lists the names of resources, defined in spec.resourceClaims,
     * that are used by this container.
     *
     * This is an alpha field and requires enabling the
     * DynamicResourceAllocation feature gate.
     *
     * This field is immutable. It can only be set for containers.
     */
    claims?: {
      /**
       * Name must match the name of one entry in pod.spec.resourceClaims of
       * the Pod where this field is used. It makes that resource available
       * inside a container.
       */
      name: string;
      /**
       * Request is the name chosen for a request in the referenced claim.
       * If empty, everything from the claim is made available, otherwise
       * only the result of this request.
       */
      request?: string;
    }[];
    /**
     * Limits describes the maximum amount of compute resources allowed.
     * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     */
    limits?: {
      [k: string]: number | string;
    };
    /**
     * Requests describes the minimum amount of compute resources required.
     * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
     * otherwise to an implementation-defined value. Requests cannot exceed Limits.
     * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     */
    requests?: {
      [k: string]: number | string;
    };
  };
}

export interface AstroOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: AstroSpec;
}

export function astro(opts: AstroOpts): ResourceManifest {
  return resource({
    apiVersion: "cms.cloudticon.com/v1",
    kind: "Astro",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}

/**
 * EnvironmentSpec defines the desired state of Environment.
 */
export interface EnvironmentSpec {
  /**
   * Description to dłuższy opis przeznaczenia środowiska.
   */
  description?: string;
  /**
   * DisplayName to przyjazna nazwa środowiska, może być używana w interfejsie użytkownika.
   */
  displayName?: string;
  /**
   * DomainSuffix to domyślny suffix DNS dodawany do nazwy instancji CMS w tym środowisku,
   * aby utworzyć pełną domenę. Np. jeśli instancja nazywa się 'myblog',
   * a suffix to '.staging.cmsticon.local', pełna domena to 'myblog.staging.cmsticon.local'.
   */
  domainSuffix: string;
  /**
   * GitBranchMapping to lista branchy Git lub wzorców (wildcards), które po pushu powinny wyzwalać
   * aktualizacje instancji CMS powiązanych z TYM środowiskiem.
   */
  gitBranchMapping?: string[];
  /**
   * InjectSecrets to lista nazw Sekretów Kubernetes, które powinny być automatycznie
   * wstrzyknięte do Podów wszystkich instancji CMS w tym środowisku.
   */
  injectSecrets?: string[];
  /**
   * Namespace określa namespace Kubernetes, w którym będą tworzone wszystkie zasoby
   * dla instancji CMS powiązanych z tym środowiskiem.
   * Jeśli nie podano, zasoby będą tworzone w tym samym namespace co instancja CMS.
   */
  namespace?: string;
  /**
   * Resources definiuje domyślne żądania (requests) i limity (limits) zasobów CPU/pamięci
   * dla kontenerów aplikacji CMS w tym środowisku.
   */
  resources?: {
    /**
     * Claims lists the names of resources, defined in spec.resourceClaims,
     * that are used by this container.
     *
     * This is an alpha field and requires enabling the
     * DynamicResourceAllocation feature gate.
     *
     * This field is immutable. It can only be set for containers.
     */
    claims?: {
      /**
       * Name must match the name of one entry in pod.spec.resourceClaims of
       * the Pod where this field is used. It makes that resource available
       * inside a container.
       */
      name: string;
      /**
       * Request is the name chosen for a request in the referenced claim.
       * If empty, everything from the claim is made available, otherwise
       * only the result of this request.
       */
      request?: string;
    }[];
    /**
     * Limits describes the maximum amount of compute resources allowed.
     * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     */
    limits?: {
      [k: string]: number | string;
    };
    /**
     * Requests describes the minimum amount of compute resources required.
     * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
     * otherwise to an implementation-defined value. Requests cannot exceed Limits.
     * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     */
    requests?: {
      [k: string]: number | string;
    };
  };
}

export interface EnvironmentOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: EnvironmentSpec;
}

export function environment(opts: EnvironmentOpts): ResourceManifest {
  return resource({
    apiVersion: "cms.cloudticon.com/v1",
    kind: "Environment",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}

/**
 * MysqlSpec definiuje pożądany stan instancji Mysql.
 */
export interface MysqlSpec {
  /**
   * Databases to lista dodatkowych baz danych do utworzenia.
   */
  databases?: {
    /**
     * Charset to zestaw znaków dla bazy danych. Domyślnie utf8mb4.
     */
    charset?: string;
    /**
     * Collation to porządek sortowania dla bazy danych. Domyślnie utf8mb4_unicode_ci.
     */
    collation?: string;
    /**
     * Name to nazwa bazy danych.
     */
    name: string;
  }[];
  /**
   * EnvironmentRef wskazuje na środowisko, z którym powiązana jest ta instancja Strapi.
   */
  environmentRef: string;
  /**
   * Name to nazwa bazy danych.
   */
  name: string;
  /**
   * Port to port na którym serwer MySQL będzie nasłuchiwał. Domyślnie 3306.
   */
  port?: number;
  /**
   * Resources definiuje zasoby CPU/pamięci dla bazy danych MySQL.
   */
  resources?: {
    /**
     * Claims lists the names of resources, defined in spec.resourceClaims,
     * that are used by this container.
     *
     * This is an alpha field and requires enabling the
     * DynamicResourceAllocation feature gate.
     *
     * This field is immutable. It can only be set for containers.
     */
    claims?: {
      /**
       * Name must match the name of one entry in pod.spec.resourceClaims of
       * the Pod where this field is used. It makes that resource available
       * inside a container.
       */
      name: string;
      /**
       * Request is the name chosen for a request in the referenced claim.
       * If empty, everything from the claim is made available, otherwise
       * only the result of this request.
       */
      request?: string;
    }[];
    /**
     * Limits describes the maximum amount of compute resources allowed.
     * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     */
    limits?: {
      [k: string]: number | string;
    };
    /**
     * Requests describes the minimum amount of compute resources required.
     * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
     * otherwise to an implementation-defined value. Requests cannot exceed Limits.
     * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     */
    requests?: {
      [k: string]: number | string;
    };
  };
  /**
   * RootPassword to hasło dla użytkownika root. Jeśli nie jest podane, zostanie wygenerowane automatycznie.
   */
  rootPassword?: string;
  /**
   * Storage to rozmiar przestrzeni dyskowej do zaalokowania.
   */
  storage: string;
  /**
   * Users to lista dodatkowych użytkowników do utworzenia.
   */
  users?: {
    /**
     * Databases to lista nazw baz danych, do których użytkownik ma mieć dostęp.
     */
    databases: string[];
    /**
     * Password to hasło użytkownika. Jeśli nie jest podane, zostanie wygenerowane automatycznie.
     */
    password?: string;
    /**
     * Privileges to lista uprawnień użytkownika. Domyślnie ["ALL"].
     */
    privileges?: string[];
    /**
     * SecretName to nazwa sekretu, w którym będzie przechowywane hasło (alternatywa dla password).
     */
    secretName?: string;
    /**
     * Username to nazwa użytkownika.
     */
    username: string;
  }[];
  /**
   * Version to wersja MySQL do użycia (np. 5.7, 8.0). Domyślnie 8.0.
   */
  version?: "5.7" | "8.0";
}

export interface MysqlOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: MysqlSpec;
}

export function mysql(opts: MysqlOpts): ResourceManifest {
  return resource({
    apiVersion: "cms.cloudticon.com/v1",
    kind: "Mysql",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}

/**
 * StrapiSpec defines the desired state of Strapi.
 */
export interface StrapiSpec {
  /**
   * Database to konfiguracja połączenia z bazą danych Strapi.
   */
  database?: {
    /**
     * Client to typ bazy danych (postgres, mysql, sqlite).
     */
    client: "postgres" | "mysql" | "sqlite";
    /**
     * Database to nazwa bazy danych.
     */
    database?: string;
    /**
     * Host to nazwa hosta serwera bazy danych.
     */
    host?: string;
    /**
     * MySQLRef to referencja do zasobu MySQL, jeśli chcemy użyć istniejącego
     * obiektu Mysql zarządzanego przez ten operator.
     */
    mysqlRef?: string;
    /**
     * Port to port serwera bazy danych.
     */
    port?: number;
    /**
     * SecretName to nazwa sekretu zawierającego hasło do bazy danych.
     */
    secretName?: string;
    /**
     * SSL określa, czy używać SSL dla połączenia z bazą danych.
     */
    ssl?: boolean;
    /**
     * UseExistingDatabase określa, czy Strapi powinien używać istniejącej bazy danych.
     */
    useExistingDatabase?: boolean;
    /**
     * Username to nazwa użytkownika bazy danych.
     */
    username?: string;
  };
  /**
   * Domain to unikalna część domeny dla tej instancji.
   */
  domain: string;
  /**
   * EnvironmentRef wskazuje na środowisko, z którym powiązana jest ta instancja Strapi.
   */
  environmentRef: string;
  /**
   * GitBranch to branch Git, który powinien być używany do buildów.
   */
  gitBranch: string;
  /**
   * GitRepository to adres URL repozytorium Git zawierającego kod aplikacji Strapi.
   */
  gitRepository: string;
  /**
   * Image to obraz Docker aplikacji Strapi.
   */
  image: string;
  /**
   * NodeVersion to opcjonalna wersja Node.js używana przez aplikację Strapi.
   */
  nodeVersion?: string;
  /**
   * Resources definiuje zasoby CPU/pamięci dla kontenerów aplikacji Strapi.
   */
  resources?: {
    /**
     * Claims lists the names of resources, defined in spec.resourceClaims,
     * that are used by this container.
     *
     * This is an alpha field and requires enabling the
     * DynamicResourceAllocation feature gate.
     *
     * This field is immutable. It can only be set for containers.
     */
    claims?: {
      /**
       * Name must match the name of one entry in pod.spec.resourceClaims of
       * the Pod where this field is used. It makes that resource available
       * inside a container.
       */
      name: string;
      /**
       * Request is the name chosen for a request in the referenced claim.
       * If empty, everything from the claim is made available, otherwise
       * only the result of this request.
       */
      request?: string;
    }[];
    /**
     * Limits describes the maximum amount of compute resources allowed.
     * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     */
    limits?: {
      [k: string]: number | string;
    };
    /**
     * Requests describes the minimum amount of compute resources required.
     * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
     * otherwise to an implementation-defined value. Requests cannot exceed Limits.
     * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     */
    requests?: {
      [k: string]: number | string;
    };
  };
}

export interface StrapiOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: StrapiSpec;
}

export function strapi(opts: StrapiOpts): ResourceManifest {
  return resource({
    apiVersion: "cms.cloudticon.com/v1",
    kind: "Strapi",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}

/**
 * WordpressSpec definiuje pożądany stan instancji Wordpress.
 */
export interface WordpressSpec {
  /**
   * Database to opcjonalna konfiguracja bazy danych dla WordPress.
   */
  database?: {
    /**
     * Host to nazwa hosta serwera bazy danych.
     */
    host?: string;
    /**
     * MySQLRef to referencja do zasobu MySQL, jeśli chcemy użyć istniejącego
     * obiektu Mysql zarządzanego przez ten operator.
     */
    mysqlRef?: string;
    /**
     * Name to nazwa bazy danych.
     */
    name?: string;
    /**
     * Port to port serwera bazy danych.
     */
    port?: number;
    /**
     * SecretName to nazwa sekretu zawierającego dane dostępowe do bazy danych.
     */
    secretName?: string;
    /**
     * UseExistingDatabase określa, czy WordPress powinien używać istniejącej bazy danych.
     */
    useExistingDatabase?: boolean;
    /**
     * User to nazwa użytkownika bazy danych.
     */
    user?: string;
  };
  /**
   * Domain to unikalna część domeny dla tej instancji.
   */
  domain: string;
  /**
   * EnvironmentRef wskazuje na środowisko, z którym powiązana jest ta instancja WordPress.
   */
  environmentRef: string;
  /**
   * GitBranch to branch Git, który powinien być używany do buildów.
   */
  gitBranch: string;
  /**
   * GitRepository to adres URL repozytorium Git zawierającego kod aplikacji WordPress.
   */
  gitRepository: string;
  /**
   * Image to obraz Docker aplikacji WordPress.
   */
  image: string;
  /**
   * Plugins to opcjonalna lista wtyczek WordPress do zainstalowania/aktywacji.
   */
  plugins?: {
    /**
     * Name to nazwa wtyczki WordPress.
     */
    name: string;
    /**
     * Version to opcjonalna wersja wtyczki.
     */
    version?: string;
  }[];
  /**
   * Resources definiuje zasoby CPU/pamięci dla kontenerów aplikacji WordPress.
   */
  resources?: {
    /**
     * Claims lists the names of resources, defined in spec.resourceClaims,
     * that are used by this container.
     *
     * This is an alpha field and requires enabling the
     * DynamicResourceAllocation feature gate.
     *
     * This field is immutable. It can only be set for containers.
     */
    claims?: {
      /**
       * Name must match the name of one entry in pod.spec.resourceClaims of
       * the Pod where this field is used. It makes that resource available
       * inside a container.
       */
      name: string;
      /**
       * Request is the name chosen for a request in the referenced claim.
       * If empty, everything from the claim is made available, otherwise
       * only the result of this request.
       */
      request?: string;
    }[];
    /**
     * Limits describes the maximum amount of compute resources allowed.
     * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     */
    limits?: {
      [k: string]: number | string;
    };
    /**
     * Requests describes the minimum amount of compute resources required.
     * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
     * otherwise to an implementation-defined value. Requests cannot exceed Limits.
     * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
     */
    requests?: {
      [k: string]: number | string;
    };
  };
  /**
   * Theme to opcjonalna konfiguracja motywu WordPress.
   */
  theme?: {
    /**
     * Name to nazwa motywu WordPress.
     */
    name: string;
  };
  /**
   * WordPressVersion to opcjonalna wersja WordPress.
   */
  wordpressVersion?: string;
}

export interface WordpressOpts {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
  spec: WordpressSpec;
}

export function wordpress(opts: WordpressOpts): ResourceManifest {
  return resource({
    apiVersion: "cms.cloudticon.com/v1",
    kind: "Wordpress",
    metadata: {
      name: opts.name,
      namespace: opts.namespace,
      labels: opts.labels,
      annotations: opts.annotations,
    },
    spec: opts.spec,
  });
}
