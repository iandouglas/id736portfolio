from playwright.sync_api import sync_playwright, Page, expect

def run_verification(page: Page):
    """
    This script verifies the functionality of the new portfolio page.
    """
    # 1. Go to the new "Work" page
    page.goto("http://localhost:3000/events")

    # Wait for the initial grid of cards to be visible
    expect(page.locator("text=My Work")).to_be_visible()

    # Take a screenshot of the initial page load
    page.screenshot(path="jules-scratch/verification/01_initial_load.png")

    # 2. Test Company Filter
    # Find and click the "Postman" company filter button
    postman_button = page.get_by_role("button", name="Postman", exact=True)
    expect(postman_button).to_be_visible()
    postman_button.click()

    # Wait for a card that is specific to the "Postman" filter to ensure the filter has been applied
    expect(page.locator("text=API Specifications Conference")).to_be_visible()
    page.screenshot(path="jules-scratch/verification/02_company_filter.png")

    # 3. Test Category Filter
    # Find and click the "Conference" category filter button
    conference_button = page.get_by_role("button", name="Conference", exact=True)
    expect(conference_button).to_be_visible()
    conference_button.click()

    # Check that a non-conference item is no longer visible
    # This assumes there was a non-conference "Postman" item visible before
    # Let's find something that is a Postman "workshop" and ensure it's gone
    # From the data, "Automating Postman for DevOps and QA" is a workshop
    expect(page.locator("text=Automating Postman for DevOps and QA")).not_to_be_visible()
    page.screenshot(path="jules-scratch/verification/03_category_filter.png")

    # 4. Test Sorting
    sort_dropdown = page.locator("#sort-select")
    expect(sort_dropdown).to_be_visible()
    sort_dropdown.select_option("duration-asc")

    # Wait for a moment for the sort to apply, then take the final screenshot
    page.wait_for_timeout(1000) # Wait for re-render
    page.screenshot(path="jules-scratch/verification/verification.png")


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        run_verification(page)
        browser.close()

if __name__ == "__main__":
    main()
