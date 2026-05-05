from pathlib import Path
import sys

REQUIRED_PATHS = [
    "services/api/app/main.py",
    "apps/client-portal/app/page.tsx",
    "apps/factory-cockpit/app/page.tsx",
    "docs/ui/README.md",
]


def main() -> int:
    missing = [path for path in REQUIRED_PATHS if not Path(path).exists()]

    if missing:
        print("Missing required paths:")
        for path in missing:
            print(f"- {path}")
        return 1

    print("AUTO repo structure OK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
