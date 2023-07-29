import {
  Link,
  useLocation,
  useSearchParams,
  useNavigation,
} from '@remix-run/react';

export default function ProductOptions({options, selectedVariant}) {
  const {pathname, search} = useLocation();
  const [currentSearchParams] = useSearchParams();
  const navigation = useNavigation();

  const paramsWithDefaults = (() => {
    const defaultParams = new URLSearchParams(currentSearchParams);

    if (!selectedVariant) {
      return defaultParams;
    }

    for (const {name, value} of selectedVariant.selectedOptions) {
      if (!currentSearchParams.has(name)) {
        defaultParams.set(name, value);
      }
    }

    return defaultParams;
  })();

  // Update the in-flight request data from the 'navigation' (if available)
  // to create an optimistic UI that selects a link before the request completes
  const searchParams = navigation.location
    ? new URLSearchParams(navigation.location.search)
    : paramsWithDefaults;

  return (
    <div className="grid gap-4 mb-6">
      {options.map((option) => {
        if (!option.values.length) {
          return;
        }

        // get the currently selected option value
        const currentOptionVal = searchParams.get(option.name);
        return (
          <div key={option.name} className="">
            <h4 className="mt-4 mb-4">{option.name}</h4>
            <div className="dropdown flavor">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                {currentOptionVal}
              </button>
              <div className="dropdown-menu">
                {option.values.map((value) => {
                  const linkParams = new URLSearchParams(searchParams);
                  const isSelected = currentOptionVal === value;
                  linkParams.set(option.name, value);
                  return (
                    <Link
                      key={value}
                      to={`${pathname}?${linkParams.toString()}`}
                      preventScrollReset
                      replace
                      className="dropdown-item"
                    >
                      {value}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
